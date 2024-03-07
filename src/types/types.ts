export interface IGeneralSettings {
  time: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };
  font: TFont;
  color: string;
}

export type TFont = "font-kumbhSans" | "font-robotoSlab" | "font-spaceMono" | string;
