import { ISVG } from "./ISVG";

export const DropdownSVG = ({ width, height, fill, className }: ISVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className={className || ""}
      viewBox="-6.5 0 32 32"
    >
      <path d="m18.813 11.406-7.906 9.906c-.75.906-1.906.906-2.625 0L.376 11.406c-.75-.938-.375-1.656.781-1.656h16.875c1.188 0 1.531.719.781 1.656"></path>
    </svg>
  );
};

export default DropdownSVG;
