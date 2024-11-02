import type { Config } from "tailwindcss";
import { Colors } from "./colors";
import plugin from "tailwindcss/plugin";

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
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      margin: px0_100,
      padding: px0_100,
      borderRadius: px0_100,
      borderWidth: px0_100,
      width: px0_300,
      minWidth: px0_300,
      colors: Colors,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
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
