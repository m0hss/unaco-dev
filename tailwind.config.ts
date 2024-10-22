import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        current: "currentColor",
        transparent: "transparent",
        primary: "#0ea5e9",
        primaryho: "#38bdf8",
        meta: "#20C5A8",
        waterloo: "#757693",
        manatee: "#999AA1",
        alabaster: "#FBFBFB",
        zumthor: "#EDF5FF",
        socialicon: "#D1D8E0",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
    keyframes: {
      line: {
        "0%, 100%": { transform: "translateY(100%)" },
        "50%": { transform: "translateY(0)" },
      },
    },
    animation: {
      line1: "line 3s linear infinite",
      line2: "line 6s linear infinite",
      line3: "line 9s linear infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
