import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "color-primary": "var(--color-primary)",
      "color-dark": "var(--color-dark)",
      "color-dark-secondary": "var(--color-dark-secondary)",

      "color-white": "var(--color-white)",
      "color-black": "var(--color-black)",
      "color-light-gray": "var(--color-light-gray)",
      "color-transparent": "var(--color-transparent)",
      "color-default-gray": "var(--color-default-gray)",
      "color-navbar-inactive-text": "var(--color-navbar-inactive-text)",
    },
    fontFamily: {
      kumbhSans: ["Kumbh Sans", "sans-serif"],
      robotoSlab: ["Roboto Slab", "serif"],
      monoSpace: ["Space Mono", "monospace"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
