// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { CircularProgress } from "@nextui-org/react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="title text-3xl">pomodoro</h1>

      <nav>
        <ul className="flex justify-around rounded-full bg-secondary-dark-color p-2">
          <li className="flex-1 p-2 cursor-pointer bg-first-theme-primary-color rounded-full ">
            <a href="#">Pomodoro</a>
          </li>
          <li className="flex-1 p-2 cursor-pointer rounded-full bg-first-theme-primary-color">
            <a href="#">Short Break</a>
          </li>
          <li className="flex-1 p-2 cursor-pointer rounded-full bg-first-theme-primary-color">
            <a href="#">Long Break</a>
          </li>
        </ul>
      </nav>

      <div className="timer-container">
        <div className="timer-container__timer p-1">
          <CircularProgress
            style={{ maxWidth: "none" }}
            className="w-full h-full timer-circle"
            classNames={{
              svg: "w-full h-full drop-shadow-md",
              indicator: "stroke-[#F87070] stroke-1",
              track: "stroke-white/10 stroke-1",
              value: "text-3xl font-semibold text-white",
            }}
            value={78}
            strokeWidth={4}
            showValueLabel={true}
            // label="25:00"
            valueLabel="25:00"
            // disableAnimation
          />
        </div>
        {/* <h2>25:00</h2>
        <button>Start</button>
        <button>Stop</button> */}
      </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
