"use client";

import Themes, { defaultTheme, ThemeNames } from "@colors/theme";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

const ThemeContext = createContext<{
  theme: ThemeNames | null;
  selectTheme: ((theme: ThemeNames) => void) | null;
}>({ theme: defaultTheme, selectTheme: null });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [theme, setTheme] = useState<ThemeNames | null>(null);

  const selectTheme = (newTheme: ThemeNames) => {
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const getSavedTheme = (): ThemeNames => {
      const savedTheme = window.localStorage.getItem("theme");

      if (Themes.some(({ title }) => title === savedTheme)) {
        return savedTheme as ThemeNames;
      }

      return defaultTheme;
    };
    setTheme(getSavedTheme());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
