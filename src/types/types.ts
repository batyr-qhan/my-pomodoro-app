export interface IGeneralSettings {
  time: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };
  font: TFont;
  // color: string;
  theme: TTheme;
}

export type TFont =
  | "Kumbh Sans, sans-serif"
  | "Roboto Slab, serif"
  | "Space Mono, monospace";

export type TTheme = "initialTheme" | "theme2" | "theme3";

export type TMode = "pomodoro" | "shortBreak" | "longBreak";
