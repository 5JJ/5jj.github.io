import type { Config } from "tailwindcss";
import { Colors } from "./colors";
import ThemeColors, { ColorTitle, ThemeColorExtension } from "./colors/theme";
import plugin from "tailwindcss/plugin";

const px0_50 = Array.from(Array(51)).reduce<{ [x: number]: string }>(
  (acc, _, i) => {
    acc[i] = `${i}px`;
    return acc;
  },
  {}
);

const px0_100 = Array.from(Array(101)).reduce<{ [x: number]: string }>(
  (acc, _, i) => {
    acc[i] = `${i}px`;
    return acc;
  },
  {}
);

const px0_300 = Array.from(Array(301)).reduce<{ [x: number]: string }>(
  (acc, _, i) => {
    acc[i] = `${i}px`;
    return acc;
  },
  {}
);

const themeSafelists = ThemeColors.reduce<{ pattern: RegExp }[]>(
  (acc, { title, colors }) => {
    for (const colorTitle in colors) {
      acc.push({
        pattern: new RegExp(`${title}-${colorTitle}`),
      });
    }

    return acc;
  },
  []
);

const themeColorExtension = ThemeColors.reduce((acc, { title, colors }) => {
  acc["textColor"] = acc["textColor"] ?? {};
  acc["colors"] = acc["colors"] ?? {};

  for (const color in colors) {
    const colorTitle = color as ColorTitle;

    if (colorTitle.match(/bg_/)) {
      acc["colors"][`${title}-${colorTitle}`] = colors[colorTitle];
    } else if (colorTitle.match(/point_/)) {
      acc["textColor"][`${title}-${colorTitle}`] = colors[colorTitle];
    }
  }

  return acc;
}, {} as ThemeColorExtension);

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      margin: px0_100,
      padding: px0_300,
      borderRadius: px0_100,
      borderWidth: px0_100,
      width: px0_300,
      height: px0_300,
      minWidth: px0_300,
      colors: {
        ...Colors,
        ...themeColorExtension.colors,
      },
      fontSize: px0_100,
      inset: px0_50,
      gap: px0_50,
      textColor: themeColorExtension.textColor,
      screens: {
        sm: "400px",
      },
    },
  },
  safelist: [...themeSafelists],
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".hide": {
          display: "none",
          width: "0px",
          height: "0px",
          visibility: "hidden",
          transform: "scale(0)",
        },
      });
    }),
  ],
};
export default config;
