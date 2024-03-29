import React from "react";
// import ArrowUpSvg from "../Svg/ArrowUp";
import { ArrowDownSvg, ArrowUpSvg } from "../Svg";
// import { ReactComponent as ArrowDownSvg } from "./arrowDown.svg";

import "./styles/number-input-with-arrows.css";

interface NumberInputWithArrowsProps {
  name: string;
  value: number | string;
  min: number;
  max: number;
  isInvalid?: boolean;
  errorMessage?: string;
  onChange: (name: string, value: number) => void;
}

const NumberInputWithArrows: React.FC<NumberInputWithArrowsProps> = ({
  name,
  value,
  min,
  max,
  isInvalid,
  errorMessage,
  onChange,
}) => {
  return (
    <div className="group flex flex-col max-[768px]:flex-row max-[768px]:items-center max-[768px]:justify-between">
      <label
        className={`${
          isInvalid
            ? "text-color-error opacity-100"
            : "text-color-dark opacity-40"
        } text-sm mb-1`}
      >
        {name}
      </label>
      <div className="relative">
        <input
          type="number"
          name={name}
          value={value}
          onChange={(e) => onChange(name, Number(e.target.value))}
          min={min}
          max={max}
          className={`input-fields__input bg-color-default-gray font-bold focus:outline-none ${
            isInvalid ? "text-color-error" : "border-color-light-gray"
          }`}
        />
        <div className="absolute right-4 top-2/4 -translate-y-1/2 flex flex-col gap-2">
          <ArrowUpSvg
            className="cursor-pointer opacity-25 group-focus-within:opacity-100 group-hover:opacity-100 transition-opacity duration-300 "
            onClick={() => onChange(name, Math.min(+value + 1, max))}
          />
          <ArrowDownSvg
            className="cursor-pointer opacity-25 group-focus-within:opacity-100  group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => onChange(name, Math.max(+value - 1, min))}
          />
        </div>
      </div>
      {isInvalid && (
        <span className="error-message max-w-36 text-xs bg-color-red-500 mt-2 select-none">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default NumberInputWithArrows;
