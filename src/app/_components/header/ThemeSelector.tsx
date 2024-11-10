"use client";

import Themes from "@colors/theme";
import { useTheme } from "../theme/ThemeContext";

const ThemeColor = (props: { color: string; index: number }) => {
  const { color, index } = props;
  return (
    <div
      className="rounded-50 shadow-sm bg-white w-40 h-40 mb-5 p-5 ring-1 ring-black/5 scale-0 group-hover:scale-100"
      style={{
        transitionDuration: `${index * 50}ms`,
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <div
        style={{ backgroundColor: color }}
        className="rounded-50 w-full h-full p-10"
      />
    </div>
  );
};

const ThemeSelector = () => {
  const { theme: currentTheme, selectTheme: updateTheme } = useTheme();

  return (
    <div>
      <h3>Theme Selector</h3>
      <ul className="flex">
        {Themes.map(({ title, colors }) => (
          <li key={title} className="relative h-30 m-5 w-50">
            <button
              onClick={() => updateTheme && updateTheme(title)}
              disabled={currentTheme === title}
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
                className={`text-${title}-point_main text-14 px-3 h-30 flex items-center group-disabled:text-gray-300`}
              >
                {title}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelector;
