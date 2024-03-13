import React from "react";
import { TMode } from "../../types/types";

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
  return (
    <nav className="mb-12 font-bold text-[#1E213F] z-10">
      <ul className="flex justify-around rounded-full bg-color-dark-secondary p-2 text-nowrap">
        <li
          className={`flex-1 p-4 cursor-pointer ${
            currentMode === "pomodoro" && "bg-color-primary"
          }  rounded-full`}
        >
          <a
            href="#"
            onClick={() => {
              setCurrentMode("pomodoro");
              setMinutes(getCurrentModeDuration("pomodoro"));
              setSeconds(0);
            }}
          >
            pomodoro
          </a>
        </li>
        <li
          className={`flex-1 p-4 cursor-pointer rounded-full ${
            currentMode === "shortBreak" && "bg-color-primary"
          }`}
        >
          <a
            href="#"
            onClick={() => {
              setCurrentMode("shortBreak");
              setMinutes(getCurrentModeDuration("shortBreak"));
              setSeconds(0);
            }}
          >
            short break
          </a>
        </li>
        <li
          className={`flex-1 p-4 cursor-pointer rounded-full ${
            currentMode === "longBreak" && "bg-color-primary"
          }`}
        >
          <a
            href="#"
            onClick={() => {
              setCurrentMode("longBreak");
              setMinutes(getCurrentModeDuration("longBreak"));
              // setMinutes(15);
              setSeconds(0);
            }}
          >
            long break
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ModesPanel;
