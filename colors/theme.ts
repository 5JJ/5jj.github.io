const ThemeColors1 = {
  bg_from: "#1e1e3a",
  bg_to: "#7f2727",
  point_main: "#ffc714",
  point_sub: "#f5f5dc",
};

const ThemeColors2 = {
  bg_from: "#daadad",
  bg_to: "#523694",
  point_main: "#fadfe5",
  point_sub: "#f5f5dc",
};

const ThemeColor3 = {
  bg_from: "#b84949",
  bg_to: "#b84949",
  point_main: "#ffe590",
  point_sub: "#ffe590",
};

const Theme1 = {
  title: "theme1" as const,
  colors: ThemeColors1,
};

const Theme2 = {
  title: "theme2" as const,
  colors: ThemeColors2,
};

const Theme3 = {
  title: "theme3" as const,
  colors: ThemeColor3,
};

const Themes = [Theme1, Theme2, Theme3];

export const defaultTheme = Theme1.title;

export type ThemeColorExtension = {
  textColor: Record<string, string>;
  colors: Record<string, string>;
};

export type ThemeNames = (typeof Themes)[number]["title"];
export type ColorTitle = keyof (typeof Themes)[number]["colors"];

export default Themes;
