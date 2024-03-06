// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
import "./App.css";
import { Input } from "@nextui-org/react";

import settingIcon from "./assets/settingsIcon.svg";
import closeIcon from "./assets/closeIcon.svg";
import ModesPanel from "./components/ModesPanel/ModesPanel";
import Timer from "./components/Timer/Timer";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  const [currentMode, setCurrentMode] = useState<
    "pomodoro" | "shortBreak" | "longBreak"
  >("pomodoro");

  const [minutes, setMinutes] = useState(25);
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
    <div className="container h-full py-12 flex flex-col font-kumbhSans overflow-scroll">
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
          isOpen={settingsOpen}
          onClose={() => {
            setSettingsOpen(false);
          }}
        >
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
          <section className="px-8 pt-8 pb-12 border-b border-b-light-gray-color">
            <div>
              <h2 className="text-left tracking-[.25em] text-xl font-semibold mb-4">
                Time (Minutes)
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
          </section>
          <section className="flex justify-between p-8 items-center border-b border-b-light-gray-color">
            <h2 className="tracking-[.5em] uppercase">Font</h2>
            <ul className="fonts-section">
              <li className="active">Aa</li>
              <li>Aa</li>
              <li>Aa</li>
            </ul>
          </section>
          <section className="flex justify-between p-8 pb-16 items-center">
            <h2 className="tracking-[.5em] uppercase">Color</h2>
            <ul className="colors-section">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </ModalWindow>
      )}
    </div>
  );
}

export default App;
