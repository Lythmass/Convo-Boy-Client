import { ISVG } from "./ISVG";

export const CloseSVG = ({ width, height, fill, className }: ISVG) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className={className || ""}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default CloseSVG;
