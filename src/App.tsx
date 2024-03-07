import { useEffect, useState } from "react";
import "./App.css";

import settingIcon from "./assets/settingsIcon.svg";
import ModesPanel from "./components/ModesPanel/ModesPanel";
import Timer from "./components/Timer/Timer";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import SettingsForm from "./components/SettingsForm/SettingsForm";
import { IGeneralSettings } from "./types/types";

function App() {
  const [generalSettings, setGeneralSettings] = useState<IGeneralSettings>({
    time: {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
    },
    font: "font-kumbhSans",
    color: "first-theme-primary-color",
    // currentMode: "pomodoro",
  });

  const getModeDuration = (
    mode: "pomodoro" | "shortBreak" | "longBreak"
  ): number => {
    return generalSettings.time[mode];
  };

  useEffect(() => {
    const storedSettings = localStorage.getItem("generalSettings");
    if (storedSettings) {
      setGeneralSettings(JSON.parse(storedSettings));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("generalSettings", JSON.stringify(generalSettings));
  }, [generalSettings]);

  const [currentMode, setCurrentMode] = useState<
    "pomodoro" | "shortBreak" | "longBreak"
  >("pomodoro");

  const [minutes, setMinutes] = useState(generalSettings.time[currentMode]);
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    let interval: number;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setIsRunning(false);
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  // const resetTimer = () => {
  //   setMinutes(getModeDuration(currentMode));
  //   setSeconds(0);
  //   setIsRunning(false);
  // };

  const progress =
    ((getModeDuration(currentMode) * 60 - (minutes * 60 + seconds)) /
      (getModeDuration(currentMode) * 60)) *
    100;

  return (
    <div className={`container h-full py-12 flex flex-col overflow-scroll`}>
      <h1 className="title text-3xl mb-12 font-bold">pomodoro</h1>

      <ModesPanel
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />

      <Timer
        progress={progress}
        minutes={minutes}
        seconds={seconds}
        isRunning={isRunning}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
      />

      <div
        className="self-center cursor-pointer"
        onClick={() => {
          setSettingsOpen(true);
        }}
      >
        <img src={settingIcon} />
      </div>

      {settingsOpen && (
        <ModalWindow
          title="Settings"
          isOpen={settingsOpen}
          onClose={() => {
            setSettingsOpen(false);
          }}
          // handleFormSubmit={(values) => {
          //   console.log("hi from the button click");
          // }}
        >
          <SettingsForm generalSettings={generalSettings} />
        </ModalWindow>
      )}
    </div>
  );
}

export default App;
