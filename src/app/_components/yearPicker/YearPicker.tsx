import classNames from "classnames";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { DATE_HEIGHT, DIRECTION, MIDDLE_Y } from "./constants";
import YearPickerStore from "./YearPickerStore";

type YearPickerProps = {
  years: number[];
  selectedYear: number;
  onSelect: (year: number) => void;
  selectItemOnTouchEnd?: boolean;
};

const YearPicker = (props: YearPickerProps) => {
  const { years, selectedYear, selectItemOnTouchEnd, onSelect } = props;

  const yearArr = useMemo(
    () => [...years].sort((prev, next) => prev - next),
    [years]
  );
  const containerEl = useRef<HTMLDivElement | null>(null);
  const listEl = useRef<HTMLUListElement | null>(null);
  const yearPicker = useRef(
    new YearPickerStore({ selectedYear, years: yearArr })
  );

  const [viewStyle, setViewStyle] = useState<{
    translateY: number;
  }>({
    translateY: MIDDLE_Y,
  });

  useLayoutEffect(() => {
    const picker = yearPicker.current;
    if (picker) {
      if (picker.isInit) {
        picker.update({ years: yearArr, selectedYear });
      }
      setViewStyle((prev) => ({
        ...prev,
        translateY: -picker.currentIndex * DATE_HEIGHT,
      }));
      picker.translateY = -picker.currentIndex * DATE_HEIGHT;
    }
  }, [years, selectedYear]);

  function handleStart(event: TouchEvent) {
    const picker = yearPicker.current;
    picker.touchY = event.targetTouches[0].pageY;
    picker.translateY = viewStyle.translateY;
  }

  function checkIsUpdateIndex(direction: number, translateY: number) {
    const picker = yearPicker.current;
    return direction === DIRECTION.DOWN
      ? picker.currentIndex * DATE_HEIGHT + DATE_HEIGHT / 2 < -translateY
      : picker.currentIndex * DATE_HEIGHT - DATE_HEIGHT / 2 > -translateY;
  }

  function handleMove(event: TouchEvent) {
    const picker = yearPicker.current;
    const touchY = event.targetTouches[0].pageY;

    const dir = touchY - picker.touchY;
    const translateY = picker.translateY + dir;
    const direction =
      touchY - picker.touchY > 0 ? DIRECTION.UP : DIRECTION.DOWN;

    if (
      direction === DIRECTION.UP &&
      translateY >= DATE_HEIGHT &&
      picker.isFirstIndex()
    ) {
      return;
    }

    if (
      direction === DIRECTION.DOWN &&
      translateY <= -picker.years.length * DATE_HEIGHT &&
      picker.isLastIndex()
    ) {
      return;
    }

    if (checkIsUpdateIndex(direction, translateY)) {
      updateIndex(direction);
    }

    setViewStyle((prev) => ({
      ...prev,
      translateY,
    }));
  }

  function updateIndex(direction: (typeof DIRECTION)[keyof typeof DIRECTION]) {
    const picker = yearPicker.current;
    if (direction === DIRECTION.DOWN) {
      picker.currentIndex++;
    } else {
      picker.currentIndex--;
    }

    picker.fixOver();
  }

  function fixListRange(currentIndex: number) {
    const picker = yearPicker.current;
    picker.animating = true;

    if (listEl.current) {
      listEl.current.style.transition = "transform .2s ease-out";
    }

    setViewStyle((prev) => ({
      ...prev,
      translateY: -currentIndex * DATE_HEIGHT,
    }));

    picker.moveToTimer = setTimeout(() => {
      picker.animating = false;
      selectItemOnTouchEnd && onSelect(picker.currentYear);

      if (listEl.current) {
        listEl.current.style.transition = "";
      }
    }, 200);
  }

  function handleEnd(event: TouchEvent) {
    const picker = yearPicker.current;
    fixListRange(picker.currentIndex);
  }

  useEffect(() => {
    const container = containerEl.current;
    const handleTouchEvent = (e: TouchEvent) => {
      e.preventDefault();
      const picker = yearPicker.current;
      if (picker.animating) return;
      if (e.type === "touchmove") {
        handleMove(e);
      } else if (e.type === "touchend") {
        handleEnd(e);
      }
    };
    if (container) {
      container.addEventListener("touchmove", handleTouchEvent);
      container.addEventListener("touchend", handleTouchEvent);
    }
    return () => {
      if (container) {
        container.removeEventListener("touchmove", handleTouchEvent);
        container.removeEventListener("touchend", handleTouchEvent);
      }
    };
  }, [onSelect, selectItemOnTouchEnd]);

  useEffect(() => {
    const container = containerEl.current;
    const handleTouchEvent = (e: TouchEvent) => {
      e.preventDefault();
      const picker = yearPicker.current;
      if (picker.animating) return;
      handleStart(e);
    };
    if (container) {
      container.addEventListener("touchstart", handleTouchEvent);
    }
    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchEvent);
      }
    };
  }, [viewStyle.translateY]);

  useEffect(() => {
    return () => {
      yearPicker.current?.clear();
    };
  }, []);

  return (
    <div className="h-full w-200 bg-black/65 overflow-hidden relative">
      <div className="flex flex-col justify-center w-full h-full">
        <div className="relative ">
          <div className="absolute top-[-300px] left-0 h-[300px] w-full z-10 shadow-[0px_10px_20px_6px_#1e1e1e] bg-[#1e1e1e] opacity-70" />
          <div className="absolute bottom-[-300px] left-0 h-[300px] w-full z-10 shadow-[0px_-10px_20px_6px_#1e1e1e] bg-[#1e1e1e] opacity-70" />
          <div className="h-[200px] relative overflow-hidden" ref={containerEl}>
            <div className="absolute h-44 top-[50%] mt-[-22px] w-full">
              <ul
                className="text-center"
                style={{
                  transform: `translateY(${viewStyle.translateY}px)`,
                }}
                ref={listEl}
              >
                {yearArr.map((value) => {
                  return (
                    <li
                      key={value}
                      className="text-16 py-10 select-none text-white/70"
                    >
                      <span
                        className={classNames("", {
                          "text-violet-600":
                            value === yearPicker.current.currentYear,
                          "font-bold": value === yearPicker.current.currentYear,
                        })}
                      >
                        {value}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {!selectItemOnTouchEnd && (
        <div className="absolute bottom-10 z-20 w-full text-center">
          <button
            className="text-18 text-white py-4 px-10 border-white/15 border-1"
            onClick={() => {
              onSelect(yearPicker.current.currentYear);
            }}
          >
            SELECT
          </button>
        </div>
      )}
    </div>
  );
};

export default YearPicker;
