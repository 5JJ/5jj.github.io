import { useLayoutEffect, useRef } from "react";
import ThemeColor from "./ThemeColor";

type ThemeProps = {
  onClick: () => void;
  disabled?: boolean;
  title: string;
  colors: Record<string, string>;
};

const Theme = (props: ThemeProps) => {
  const { onClick, disabled, title, colors } = props;

  const containerEl = useRef<HTMLDivElement | null>(null);
  const titleEl = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (containerEl.current && titleEl.current) {
      containerEl.current.style.width = `${titleEl.current.clientWidth}px`;
      containerEl.current.style.overflow = "visible";
    }
  }, []);

  return (
    <div className="relative w-0 h-30 overflow-hidden" ref={containerEl}>
      <button
        onClick={onClick}
        disabled={!!disabled}
        className="absolute group disabled:bg-white/40 bg-white h-30 rounded-10 duration-300 enabled:hover:h-220 enabled:hover:pt-190 bottom-0 overflow-hidden enabled:hover:rounded-b-10 enabled:hover:rounded-t-30"
      >
        <ul className="absolute transition-transform delay-100 z-10 origin-bottom bottom-30 left-[50%] translate-x-[-50%] hidden group-hover:block">
          {Object.values(colors).map((color, index) => (
            <ThemeColor
              index={Object.values(colors).length - index - 1}
              color={color}
              key={`${title}_${color}_${index}`}
            />
          ))}
        </ul>
        <div
          ref={titleEl}
          className={`text-${title}-point_main text-14 px-3 h-30 flex items-center group-disabled:text-gray-300`}
        >
          {title}
        </div>
      </button>
    </div>
  );
};

export default Theme;
