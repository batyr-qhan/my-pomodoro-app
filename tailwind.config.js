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
      "primary-dark-color": "#1e213f",
      "secondary-dark-color": "#161932",
      "first-theme-primary-color": "#f87070",
      "second-theme-primary-color": "#70f3f8",
      "third-theme-primary-color": "#d881f8",
      "white-color": "#ffffff",
      "black-color": "#000000",
      "light-gray-color": "#E3E1E1",
      "transparent-color": "transparent",
    },
    fontFamily: {
      kumbhSans: ["Kumbh Sans", "sans-serif"],
      // sans: ["Kumbh Sans", "sans-serif"],
      robotoSlab: ["Roboto Slab", "serif"],
      monoSpace: ["Space Mono", "monospace"],
      // kumbhSans: ["Kumbh Sans", "sans-serif"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
