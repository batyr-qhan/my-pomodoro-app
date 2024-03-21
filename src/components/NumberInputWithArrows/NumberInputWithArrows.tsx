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
  onChange: (name: string, value: number) => void;
}

const NumberInputWithArrows: React.FC<NumberInputWithArrowsProps> = ({
  name,
  value,
  min,
  max,
  onChange,
}) => {
  return (
    <div className="relative group">
      {/* <ArrowUpSvg onClick={() => onChange(name, Math.min(value + 1, max))} /> */}
      <input
        type="number"
        name={name}
        value={value}
        onChange={(e) => onChange(name, Number(e.target.value))}
        min={min}
        max={max}
        className="input-fields__input bg-color-default-gray font-bold focus:outline-none"
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
  );
};

export default NumberInputWithArrows;
