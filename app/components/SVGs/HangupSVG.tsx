import { ISVG } from "./ISVG";

export const HangupSVG = ({
  width,
  height,
  fill,
  className,
  onClick,
}: ISVG & { onClick: () => void }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`${className || ""}`}
      fill={fill}
      viewBox="0 0 24 24"
      onClick={onClick}
    >
      <path
        fill={fill}
        d="M23 12.5 20.5 15l-3-2V8.842C15.976 8.337 14.146 8 12 8s-3.976.337-5.5.842V13l-3 2L1 12.5c.665-.997 2.479-2.657 5.5-3.658C8.024 8.337 9.855 8 12 8s3.976.337 5.5.842c3.021 1 4.835 2.66 5.5 3.658"
      ></path>
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.5 8.842C15.976 8.337 14.146 8 12 8s-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 15l-3-2zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 15l3-2z"
      ></path>
    </svg>
  );
};
