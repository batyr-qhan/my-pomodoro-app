import { useEffect, useState } from "react";
import "./App.css";

import settingIcon from "./assets/settingsIcon.svg";
import ModesPanel from "./components/ModesPanel/ModesPanel";
import Timer from "./components/Timer/Timer";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import SettingsForm from "./components/SettingsForm/SettingsForm";
import useLocalStorage from "./hooks/useLocalStorage";
import { IGeneralSettings } from "./types/types";

const initialSettings: IGeneralSettings = {
  time: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
  font: "Kumbh Sans, sans-serif",
  theme: "initialTheme",
};

function App() {
  const [generalSettings, setGeneralSettings] = useLocalStorage(
    "generalSettings",
    initialSettings
  );

  const [currentMode, setCurrentMode] = useState<
    "pomodoro" | "shortBreak" | "longBreak"
  >("pomodoro");

  const getModeDuration = (
    mode: "pomodoro" | "shortBreak" | "longBreak"
  ): number => {
    return generalSettings.time[mode];
  };

  const [minutes, setMinutes] = useState(generalSettings.time[currentMode]);
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    // Update font family and theme color when generalSettings change
    document.body.style.fontFamily = generalSettings.font;
    document
      .querySelector("html")
      ?.setAttribute("data-theme", generalSettings.theme);

    setMinutes(generalSettings.time[currentMode]);
  }, [generalSettings, currentMode]);

  // TODO: think about this func and try

  // const handleFormSubmit = (fieldName, value) => {
  //   // Copy the existing generalSettings object
  //   const updatedSettings = { ...generalSettings };
  //   // Update the specified field with the new value
  //   updatedSettings[fieldName] = value;
  //   // Set the updated settings object
  //   setGeneralSettings(updatedSettings);
  // };

  // const [generalSettings, setGeneralSettings] = useState<IGeneralSettings>({
  //   time: {
  //     pomodoro: 25,
  //     shortBreak: 5,
  //     longBreak: 15,
  //   },
  //   font: "font-kumbhSans",
  //   theme: "initial-theme",
  //   color: "first-theme-primary-color",
  //   // currentMode: "pomodoro",
  // });

  // useEffect(() => {
  //   const storedSettings = localStorage.getItem("generalSettings");
  //   if (storedSettings) {
  //     setGeneralSettings(JSON.parse(storedSettings));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("generalSettings", JSON.stringify(generalSettings));
  // }, [generalSettings]);

  useEffect(() => {
    let interval: number;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes((prevMinutes: number) => prevMinutes - 1);
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
    <div className={`container h-full p-12 flex flex-col overflow-scroll`}>
      <h1 className="title text-3xl mb-12 font-bold">pomodoro</h1>

      <ModesPanel
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        getCurrentModeDuration={getModeDuration}
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
          <SettingsForm
            generalSettings={generalSettings}
            setGeneralSettings={setGeneralSettings}
            handleClose={() => {
              setSettingsOpen(false);
            }}
          />
        </ModalWindow>
      )}
    </div>
  );
}

export default App;
