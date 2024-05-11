import { CircularProgress } from "@nextui-org/react";
import React from "react";

import "./styles/Timer.css";

interface TimerProps {
  progress: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
}
const Timer: React.FC<TimerProps> = ({
  progress,
  minutes,
  seconds,
  isRunning,
  startTimer,
  pauseTimer,
}) => {
  return (
    <div className="timer-container">
      <div className="timer-container__timer p-1">
        <CircularProgress
          style={{ maxWidth: "none" }}
          className="w-full h-full timer-circle"
          classNames={{
            svg: "w-full h-full drop-shadow-md",
            indicator: "stroke-color-primary stroke-1",
            track: "stroke-white/10 stroke-1",
            value: "text-7xl text-white",
          }}
          value={progress}
          strokeWidth={4}
          showValueLabel={true}
          aria-label="aowefijo"
          valueLabel={
            <div
              aria-label="timer progress"
              className="flex justify-center items-center w-full h-full"
            >
              <div className="relative">
                <span>
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </span>
                <button
                  className={`absolute -bottom-12 left-0 right-0 text-color rounded-full uppercase text-lg max-[768px]:text-base tracking-[1em] ${minutes < 10 ? 'indent-0' : 'indent-[1em]'} hover:text-color-primary transition-colors active:scale-95`}
                  onClick={() => {
                    if (isRunning) {
                      pauseTimer();
                    } else {
                      startTimer();
                    }
                  }}
                >
                  {isRunning ? "pause" : "start"}
                </button>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Timer;
