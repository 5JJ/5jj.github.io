"use client";

import classNames from "classnames";
import React, {
  memo,
  RefObject,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import Portal from "./Portal";
import Slider from "./slider";
import ArrowRightIcon from "@icons/arrow_right_icon.svg";

type PopupSliderProps = PropsWithChildren<{
  initalSlide?: number;
  showPagination?: boolean;
  prevButtonEl?: RefObject<HTMLButtonElement>;
  nextButtonEl?: RefObject<HTMLButtonElement>;
  navigatorId?: string;
  onPrevClicked?: (slideIndex: number) => void;
  onNextClicked?: (slideIndex: number) => void;
}>;

function isPopupSliderItem(child: ReactElement<any, any>): boolean {
  return child.type;
  // child.type === "div"
  // child.type.displayName &&
  // child.type.displayName.includes("PopupSliderItem")
}

function getSlides(children?: ReactNode) {
  return React.Children.toArray(children).filter(
    (child): child is ReactElement<any, any> =>
      React.isValidElement(child) && isPopupSliderItem(child)
  );
}

const PopupSlider = (props: PopupSliderProps) => {
  const {
    children,
    onNextClicked,
    onPrevClicked,
    initalSlide = 0,
    showPagination,
    prevButtonEl,
    nextButtonEl,
    navigatorId,
  } = props;

  const containerRef = useRef<null | HTMLDivElement>(null);
  const wrapperRef = useRef<null | HTMLDivElement>(null);

  const currentSlideIndex = useRef<number>(initalSlide);
  const sliderRef = useRef<Slider | null>(null);

  const [sliderInfo, setSliderInfo] = useState<Record<string, number>>({
    currentSlideIndex: initalSlide,
    size: 0,
  });

  const slides = useMemo(() => {
    return getSlides(children);
  }, [children]);

  if (!containerRef.current) {
    sliderRef.current = new Slider({
      renderSlider: setSliderInfo,
    });
  }

  const slideTo = (index: number) => {
    currentSlideIndex.current = index;
    setSliderInfo((prev) => ({
      ...prev,
      currentSlideIndex: currentSlideIndex.current,
    }));
  };

  const handlePrevClicked = () => {
    if (currentSlideIndex.current < 1) {
      return null;
    }

    sliderRef.current?.startTransition();

    slideTo(currentSlideIndex.current - 1);

    onPrevClicked && onPrevClicked(currentSlideIndex.current);

    sliderRef.current?.endTransition();
  };

  const handleNextClicked = () => {
    if (currentSlideIndex.current >= slides.length - 1) return;

    sliderRef.current?.startTransition();

    slideTo(currentSlideIndex.current + 1);

    onNextClicked && onNextClicked(currentSlideIndex.current);

    sliderRef.current?.endTransition();
  };

  useLayoutEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;

    const slider = sliderRef.current?.init(
      containerRef.current,
      wrapperRef.current
    );
    if (slider) {
      setSliderInfo((prev) => ({
        ...prev,
        size: slider.size,
      }));
    }

    return () => {
      // destory sliderRef.current;
      sliderRef.current?.destory();
    };
  }, []);

  useEffect(() => {
    if (sliderInfo.currentSlideIndex !== initalSlide) {
      slideTo(initalSlide);
    }
  }, [initalSlide]);

  useEffect(() => {
    function onPrevButtonClick(this: HTMLButtonElement) {
      handlePrevClicked();

      const el = this;
      el.disabled = currentSlideIndex.current <= 0;

      if (nextButtonEl?.current) {
        nextButtonEl.current.disabled =
          currentSlideIndex.current >= slides.length - 1;
      }
    }
    function onNextButtonClick(this: HTMLButtonElement) {
      handleNextClicked();

      const el = this;
      el.disabled = currentSlideIndex.current >= slides.length - 1;

      if (prevButtonEl?.current) {
        prevButtonEl.current.disabled = currentSlideIndex.current <= 0;
      }
    }
    if (prevButtonEl && prevButtonEl.current) {
      prevButtonEl.current.addEventListener("click", onPrevButtonClick);
    }
    if (nextButtonEl && nextButtonEl.current) {
      nextButtonEl.current.addEventListener("click", onNextButtonClick);
    }
    return () => {
      if (prevButtonEl && prevButtonEl.current) {
        prevButtonEl.current.removeEventListener("click", onPrevButtonClick);
      }
      if (nextButtonEl && nextButtonEl.current) {
        nextButtonEl.current.removeEventListener("click", onNextButtonClick);
      }
    };
  }, []);

  // check if there's a previous slide to go further
  // check if there's a next slide to1 go further
  const slicedPoint = () => {
    if (sliderInfo.currentSlideIndex === 0) {
      return {
        start: 0,
        end: 2,
      };
    }

    if (sliderInfo.currentSlideIndex >= slides.length) {
      return {
        start: slides.length - 2,
        end: slides.length,
      };
    }

    return {
      start: sliderInfo.currentSlideIndex - 1,
      end: sliderInfo.currentSlideIndex + 2,
    };
  };

  const renderSlides = (slides: ReactElement<any, any>[]) => {
    const slidesToRender = [];

    const { start, end } = slicedPoint();

    const style = {
      ["left"]: `${(sliderRef.current?.size ?? 0) * start}px`,
    };

    for (let i = 0; i < slides.length; i++) {
      if (i >= start && i <= end) {
        slidesToRender.push(slides[i]);
      }
    }

    return slidesToRender.map((child, index) => {
      return React.cloneElement(child, {
        style,
        key: child.props.virtualIndex || child.key || `slide-${index}`,
      });
    });
  };

  const translateX =
    sliderInfo.currentSlideIndex * -1 * (sliderRef.current?.size ?? 0);

  return (
    <div ref={containerRef} className="overflow-clip">
      {showPagination && (
        <div>
          <span>{sliderInfo.currentSlideIndex + 1}</span>/
          <span>{slides.length}</span>
        </div>
      )}
      <div
        ref={wrapperRef}
        className={classNames("flex w-full h-full relative ", {
          "text-white": !sliderInfo.size,
        })}
        style={{
          transform: `translate3d(${translateX}px, 0px, 0px)`,
        }}
      >
        {renderSlides(slides)}
      </div>
      {!!navigatorId && (
        <Portal targetId={navigatorId}>
          <div className="text-0">
            <button
              onClick={handlePrevClicked}
              disabled={sliderInfo.currentSlideIndex <= 0}
              className="group"
            >
              <ArrowRightIcon
                width={20}
                height={24}
                className="rotate-180 group-disabled:stroke-gray-200"
              />
            </button>
          </div>
          <div className="text-0">
            <button
              onClick={handleNextClicked}
              disabled={sliderInfo.currentSlideIndex >= slides.length - 1}
              className="group"
            >
              <ArrowRightIcon
                width={20}
                height={24}
                className="group-disabled:stroke-gray-200"
              />
            </button>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default memo(PopupSlider, (prev, next) => {
  return prev.initalSlide === next.initalSlide;
});
