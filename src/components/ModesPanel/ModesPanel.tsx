import React from "react";
import { TMode } from "../../types/types";

import "./styles/modes-panel.css";

interface MyComponentProps {
  currentMode: "pomodoro" | "shortBreak" | "longBreak";
  setCurrentMode: React.Dispatch<
    React.SetStateAction<"pomodoro" | "shortBreak" | "longBreak">
  >;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  getCurrentModeDuration: (mode: TMode) => number;
}

const ModesPanel: React.FC<MyComponentProps> = ({
  currentMode,
  setCurrentMode,
  setMinutes,
  setSeconds,
  getCurrentModeDuration,
}) => {
  const handleModeClick = (mode: TMode) => {
    setCurrentMode(mode);
    setMinutes(getCurrentModeDuration(mode));
    setSeconds(0);
  };

  return (
    <nav className="font-bold text-color-navbar-inactive-text z-10 max-[768px]:text-[12px]">
      <ul className="flex justify-around rounded-full bg-color-dark-secondary p-2 text-nowrap">
        <li
          className={`flex-1 cursor-pointer ${
            currentMode === "pomodoro" ? "bg-color-primary" : "bg-color-transparent"
          }  rounded-full`}
          onClick={() => handleModeClick("pomodoro")}
        >
          <span
            className={`${
              currentMode === "pomodoro" ? "opacity-100 text-color-dark" : ""
            }`}
          >
            pomodoro
          </span>
        </li>
        <li
          className={`flex-1 p-4 cursor-pointer rounded-full ${
            currentMode === "shortBreak" ? "bg-color-primary" : ""
          }`}
          onClick={() => handleModeClick("shortBreak")}
        >
          <span
            className={`${
              currentMode === "shortBreak" ? "opacity-100 text-color-dark" : ""
            }`}
          >
            short break
          </span>
        </li>
        <li
          className={`flex-1 p-4 cursor-pointer rounded-full ${
            currentMode === "longBreak" ? "bg-color-primary" : ""
          }`}
          onClick={() => handleModeClick("longBreak")}
        >
          <span
            className={`${
              currentMode === "longBreak" ? "opacity-100 text-color-dark" : ""
            }`}
          >
            long break
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default ModesPanel;
