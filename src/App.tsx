// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { CircularProgress, Input } from "@nextui-org/react";

import settingIcon from "./assets/settingsIcon.svg";
import closeIcon from "./assets/closeIcon.svg";
import ModesPanel from "./components/ModesPanel/ModesPanel";
import Timer from "./components/Timer/Timer";

function App() {
  const [currentMode, setCurrentMode] = useState<
    "pomodoro" | "shortBreak" | "longBreak"
  >("pomodoro");

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  const [settingsOpen, setSettingsOpen] = useState(true);

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

  const resetTimer = () => {
    // setMinutes(25);

    setMinutes(getModeDuration(currentMode));
    setSeconds(0);
    setIsRunning(false);
  };

  const getModeDuration = (
    mode: "pomodoro" | "shortBreak" | "longBreak"
  ): number => {
    switch (mode) {
      case "pomodoro":
        return 25;
      case "shortBreak":
        return 5;
      case "longBreak":
        return 15;
      default:
        return 25;
    }
  };

  const progress =
    ((getModeDuration(currentMode) * 60 - (minutes * 60 + seconds)) /
      (getModeDuration(currentMode) * 60)) *
    100;

  return (
    <div className="container h-full py-12 flex flex-col font-kumbhSans">
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
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black-color opacity-50"></div>
          <div className="bg-white-color rounded-2xl shadow-lg z-0 text-secondary-dark-color font-bold">
            <header className="flex justify-between items-center border-b border-b-light-gray-color p-8">
              <h2 className="text-3xl">Settings</h2>
              <button
                onClick={() => {
                  setSettingsOpen(false);
                }}
              >
                <img src={closeIcon} />
              </button>
            </header>
            <div className="px-8 pt-8 pb-12">
              <div>
                <h2 className="text-left tracking-widest text-xl font-semibold">
                  Time Minutes
                </h2>

                <div className="flex gap-4">
                  <Input
                    type="number"
                    classNames={{
                      input: "bg-transparent-color",
                    }}
                  />

                  <Input type="number" />

                  <Input type="number" />
                </div>
              </div>
            </div>
            {/* <h2>Settings</h2>
            <button
              onClick={() => {
                setSettingsOpen(false);
              }}
            >
              Close
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
