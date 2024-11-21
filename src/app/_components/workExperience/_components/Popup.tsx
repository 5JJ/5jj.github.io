"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Modal from "../../common/modal/Modal";
import PopupSlider from "../../common/modal/PopupSlider";
import PopupSliderItem from "../../common/modal/PopupSliderItem";
import CloseIcon from "@icons/close_icon.svg";
import data from "../timelineData";
import TimelineItem from "./TimelineItem";
import CompanyInfo from "./CompanyInfo";
import { WorkExperience } from "../types";
import Period from "./Period";
import ArrowRightIcon from "@icons/arrow_right_icon.svg";

type PopupProps = {
  open?: boolean;
  closePopup: () => void;
  initialItemIndex?: number;
};

type PopupItemProps = {
  year: number;
} & WorkExperience;

const PopupItem = (props: PopupItemProps) => {
  const { year, companyInfo, startDate, endDate } = props;
  return (
    <div className="p-20 w-full">
      <div className="border-b-1 pb-10 text-14">
        <h3>{year}</h3>
        <Period startDate={startDate} endDate={endDate} />
        <CompanyInfo {...companyInfo} />
      </div>
    </div>
  );
};

const Popup = (props: PopupProps) => {
  const { open = false, closePopup, initialItemIndex = 0 } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [popupIndex, setPopupIndex] = useState<number>(initialItemIndex);
  const nextButtonEl = useRef<HTMLButtonElement>(null);
  const prevButtonEl = useRef<HTMLButtonElement>(null);

  const onNextClick = (slideIndex: number) => {
    router.replace(`${pathname}?modal=open&index=${slideIndex}`, {
      scroll: false,
    });
    setPopupIndex(slideIndex);
  };

  const onPrevClick = (slideIndex: number) => {
    router.replace(`${pathname}?modal=open&index=${slideIndex}`, {
      scroll: false,
    });
    setPopupIndex(slideIndex);
  };

  const onTimelineClick = (index: number) => {
    router.replace(`${pathname}?modal=open&index=${index}`, {
      scroll: false,
    });
    setPopupIndex(index);
  };

  useEffect(() => {
    if (open) {
      router.push(`${pathname}?modal=open&index=${initialItemIndex}`, {
        scroll: false,
      });
    } else {
      router.replace(pathname, {
        scroll: false,
      });
    }
  }, [open]);

  useEffect(() => {
    if (searchParams.size === 0 && open) {
      closePopup();
    }
  }, [searchParams]);

  useEffect(() => {
    setPopupIndex(initialItemIndex);
  }, [initialItemIndex]);

  return (
    <Modal open={open} onClick={closePopup}>
      <div className="pl-60 pr-20 py-30 w-full h-full relative">
        <div
          onClick={closePopup}
          className="absolute right-5 bg-black_main rounded-[50%] p-6 top-15 z-10"
        >
          <button>
            <CloseIcon width={28} height={28} fill={"white"} />
          </button>
        </div>
        <div className="bg-white w-full h-full text-16 rounded-10 overflow-hidden flex flex-col ">
          <div className="flex-auto">
            <PopupSlider
              onNextClicked={onNextClick}
              initalSlide={popupIndex}
              prevButtonEl={prevButtonEl}
              nextButtonEl={nextButtonEl}
              onPrevClicked={onPrevClick}
            >
              {data.map(({ timelineYear, workExperience }) => (
                <PopupSliderItem key={timelineYear}>
                  <PopupItem year={timelineYear} {...workExperience} />
                </PopupSliderItem>
              ))}
            </PopupSlider>
          </div>
          {/* <div id="sliderNavi" className="flex" /> */}
          <div className="flex justify-center flex-shrink-0 py-20 items-center">
            <button ref={prevButtonEl} className="p-4 group">
              <ArrowRightIcon
                width={20}
                height={24}
                className="rotate-180 group-disabled:stroke-gray-200"
              />
            </button>
            <span className="cursor-default mx-10">
              {data[popupIndex]?.timelineYear}
            </span>
            <button ref={nextButtonEl} className="p-4 group">
              <ArrowRightIcon
                width={20}
                height={24}
                className="group-disabled:stroke-gray-200"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 bg-black_main/80 h-full w-50">
        <ul className="flex flex-col h-full">
          {data.map(({ timelineYear }, index) => (
            <li key={timelineYear} className="flex-auto">
              <TimelineItem
                size={20}
                text={timelineYear}
                highlight={index === popupIndex}
                onClick={() => onTimelineClick(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default Popup;
