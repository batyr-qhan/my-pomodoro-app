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
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
