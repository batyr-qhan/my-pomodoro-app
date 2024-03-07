import { CircularProgress } from "@nextui-org/react";
import React from "react";

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
    <div className="timer-container mb-12">
      <div className="timer-container__timer p-1">
        <CircularProgress
          style={{ maxWidth: "none" }}
          className="w-full h-full timer-circle"
          classNames={{
            svg: "w-full h-full drop-shadow-md",
            indicator: "stroke-color-primary stroke-1",
            track: "stroke-white/10 stroke-1",
            value: "text-7xl font-semibold text-white",
          }}
          value={progress}
          strokeWidth={4}
          showValueLabel={true}
          aria-label="aowefijo"
          valueLabel={
            <div
              aria-label="timer progress"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </span>
              <button
                onClick={() => {
                  if (isRunning) {
                    pauseTimer();
                  } else {
                    startTimer();
                  }
                }}
              >
                Start
              </button>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Timer;
