"use client";

import classNames from "classnames";
import { useState } from "react";
import { useTheme } from "../../theme/ThemeContext";

type TimelineItemProps = {
  onClick?: () => void;
  size?: number;
  top?: number;
  highlight?: boolean;
  text: number | string;
  showTextOnHover?: boolean;
};

const TimelineItem = (props: TimelineItemProps) => {
  const {
    onClick,
    text,
    size = 16,
    top = 20,
    highlight,
    showTextOnHover,
  } = props;

  const [showText, setShowText] = useState<boolean>(!showTextOnHover);
  const { theme } = useTheme();

  const onMouseEnter = () => {
    setShowText(true);
  };

  const onMouseLeave = () => {
    setShowText(false);
  };

  return (
    <div className="relative h-full" style={{ width: size }}>
      <div
        className={classNames("relative z-10 flex", {
          "cursor-pointer": !!onClick,
        })}
        style={{ top }}
        onClick={onClick}
        role={onClick && "button"}
        onMouseEnter={showTextOnHover ? onMouseEnter : undefined}
        onMouseLeave={showTextOnHover ? onMouseLeave : undefined}
      >
        <span
          className={classNames(
            `hover:bg-${theme}-bg_from rounded-[50%] inline-block border-black_main self-center flex-shrink-0`,
            {
              "bg-white border-4": highlight,
              "border-8 bg-black_main": !highlight,
            }
          )}
          style={{ width: size, height: size }}
        />
        {showText && (
          <span
            className={classNames("pl-10", {
              "bg-black_main absolute text-white text-16 pr-10 rounded-4 ":
                showTextOnHover,
            })}
            style={{ left: size + 2 }}
          >
            {text}
          </span>
        )}
      </div>
      <div
        className="border-2 absolute h-full top-0 border-black_main"
        style={{ left: size / 2 - 2 }}
      />
    </div>
  );
};

export default TimelineItem;
