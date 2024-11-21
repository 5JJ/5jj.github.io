"use client";

import Themes, { ColorTitle, defaultTheme, ThemeNames } from "@colors/theme";
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
  getThemeColor: (colorKey: ColorTitle) => undefined | string;
}>({ theme: defaultTheme, selectTheme: null, getThemeColor: () => undefined });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [theme, setTheme] = useState<ThemeNames | null>(null);

  const selectTheme = (newTheme: ThemeNames) => {
    window.localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const getThemeColor = (colorKey: ColorTitle) => {
    const currentTheme = Themes.find(({ title }) => title === theme);
    return currentTheme?.colors[colorKey];
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
    <ThemeContext.Provider value={{ theme, selectTheme, getThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
