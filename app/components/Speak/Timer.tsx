import { dmsans } from "@/app/fonts";
import { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const secondsFormatted = Math.round(seconds % 60);
  const minutesFormatted = Math.floor(seconds / 60);
  return (
    <div className="pt-3 sm:pt-4 w-full flex items-center justify-center">
      <p
        className={`text-xl sm:text-2xl font-medium text-gray-100 ${dmsans.className}`}
      >
        {minutesFormatted < 10 && "0"}
        {minutesFormatted}:{secondsFormatted < 10 && "0"}
        {secondsFormatted}
      </p>
    </div>
  );
};
