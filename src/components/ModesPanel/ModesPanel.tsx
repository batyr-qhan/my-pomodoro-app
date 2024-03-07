import React from "react";

interface MyComponentProps {
  currentMode: "pomodoro" | "shortBreak" | "longBreak";
  setCurrentMode: React.Dispatch<
    React.SetStateAction<"pomodoro" | "shortBreak" | "longBreak">
  >;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

const ModesPanel: React.FC<MyComponentProps> = ({
  currentMode,
  setCurrentMode,
  setMinutes,
  setSeconds,
}) => {
  return (
    <nav className="mb-12 font-bold text-[#1E213F]">
      <ul className="flex justify-around rounded-full bg-color-dark-secondary p-2">
        <li
          className={`flex-1 p-4 cursor-pointer ${
            currentMode === "pomodoro" && "bg-color-primary"
          }  rounded-full`}
        >
          <a
            href="#"
            onClick={() => {
              setCurrentMode("pomodoro");
              setMinutes(25);
              setSeconds(0);
              // setIsRunning(false);

              // setCurrentFontFamily("font-kumbhSans");
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
              setMinutes(5);
              setSeconds(0);

              // setCurrentFontFamily("font-robotoSlab");
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
              setMinutes(15);
              setSeconds(0);
              // setCurrentFontFamily("font-robotoSlab");
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
