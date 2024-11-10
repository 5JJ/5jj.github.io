"use client";

import Themes from "@colors/theme";
import { useTheme } from "../../theme/ThemeContext";
import Theme from "./Theme";

const ThemeSelector = () => {
  const { theme: currentTheme, selectTheme } = useTheme();

  return (
    <div>
      <h3>Theme Selector</h3>
      <ul className="flex">
        {Themes.map(({ title, colors }) => (
          <li key={title} className="m-5">
            <Theme
              colors={colors}
              title={title}
              disabled={title === currentTheme}
              onClick={() => selectTheme && selectTheme(title)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelector;
