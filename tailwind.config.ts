import type { Config } from "tailwindcss";
import { Colors } from "./color";

const px0_100 = Array.from(Array(101)).reduce<{ [x: number]: string }>(
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
    colors: Colors,
    extend: {
      borderRadius: px0_100,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
