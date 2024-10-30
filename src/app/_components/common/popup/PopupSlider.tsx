"use client";

import classNames from "classnames";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { PropsWithChildren, ReactElement, ReactNode } from "react";
import Slider from "./slider";

type PopupSliderProps = PropsWithChildren<{
  initalSlide?: number;
  onPrevClicked?: () => void;
  onNextClicked?: () => void;
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
  const { children, onNextClicked, onPrevClicked, initalSlide = 0 } = props;

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

  const handlePrevClicked = () => {
    if (currentSlideIndex.current < 1) {
      return null;
    }

    sliderRef.current?.startTransition();

    currentSlideIndex.current = currentSlideIndex.current - 1;
    setSliderInfo((prev) => ({
      ...prev,
      currentSlideIndex: currentSlideIndex.current,
    }));
    onPrevClicked && onPrevClicked();

    sliderRef.current?.endTransition();
  };

  const handleNextClicked = () => {
    if (currentSlideIndex.current >= slides.length - 1) {
      return null;
    }
    sliderRef.current?.startTransition();

    currentSlideIndex.current = currentSlideIndex.current + 1;
    setSliderInfo((prev) => ({
      ...prev,
      currentSlideIndex: currentSlideIndex.current,
    }));
    onNextClicked && onNextClicked();

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
      <div>
        <span>{sliderInfo.currentSlideIndex + 1}</span>/
        <span>{slides.length}</span>
      </div>
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
      <div>
        <button
          onClick={handlePrevClicked}
          disabled={sliderInfo.currentSlideIndex <= 0}
        >
          Prev
        </button>
      </div>
      <div>
        <button
          onClick={handleNextClicked}
          disabled={sliderInfo.currentSlideIndex >= slides.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PopupSlider;
