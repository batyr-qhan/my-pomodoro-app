import React, { SVGProps } from "react";

interface ArrowDownSvgProps extends SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
}
const ArrowDownSvg: React.FC<ArrowDownSvgProps> = ({
  color,
  className,
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={7}
    fill={color || "none"}
    {...rest}
    className={className}
  >
    <path stroke="#1E213F" strokeWidth={2} d="m1 1 6 4 6-4" />
  </svg>
);
export default ArrowDownSvg;
