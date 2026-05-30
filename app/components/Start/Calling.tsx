import { dmsans, nunito } from "@/app/fonts";
import CallSVG from "../SVGs/CallSVG";
import { HangupSVG } from "../SVGs/HangupSVG";

interface ICallingProps {
  handleHangup: (isEndingConversation?: boolean) => void;
}

export const Calling = ({ handleHangup }: ICallingProps) => {
  return (
    <div className="flex h-full w-full relative flex-col items-center py-8 sm:py-10 gap-6 sm:gap-8">
      <div className="mt-6 sm:mt-10 flex flex-col items-center gap-5 sm:gap-6">
        <CallSVG
          className="bg-size-[200%_200%] z-10 animate-ring-shake bg-linear-to-r from-[#00C9B5] to-[#14C900] hover:animate-gradient-flow rounded-full p-6 sm:p-8 shadow-lg w-28 h-28 sm:w-37.5 sm:h-37.5"
          width={150}
          height={150}
          fill="white"
        />
        <div className="w-30 h-30 top-13 sm:top-24 absolute rounded-full">
          <div className="absolute inset-0 rounded-full border-2 border-[#00C9B5]  animate-ring-expand" />
          <div className="absolute -inset-6 rounded-full border-2 border-green-300 animate-ring-expand delay-200" />
          <div className="absolute -inset-12 rounded-full border-2 border-[#14C900] animate-ring-expand delay-400" />
        </div>
        <p
          className={`text-3xl sm:text-4xl text-gray-800 ${dmsans.className} font-medium `}
        >
          Convo Boy
        </p>
      </div>
      <p className={`text-sm text-gray-600 ${nunito.className} `}>Ringing...</p>
      <HangupSVG
        width={70}
        height={70}
        fill="white"
        className="bg-red-500 absolute bottom-8 sm:bottom-10 cursor-pointer hover:bg-red-600 hover:scale-105 transition-all rounded-full p-4 w-16 h-16 sm:w-17.5 sm:h-17.5"
        onClick={() => handleHangup(false)}
      />
    </div>
  );
};
