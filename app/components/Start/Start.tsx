import { dmsans, nunito } from "@/app/fonts";
import CallSVG from "../SVGs/CallSVG";
import { LevelChooser } from "./LevelChooser";
import { IOptionProps } from "./Option";
import { Dispatch } from "react";

interface StartProps {
  handleStartCalling: () => void;
  selectedOption: IOptionProps | null;
  setSelectedOption: Dispatch<React.SetStateAction<IOptionProps | null>>;
}

export const Start = ({
  handleStartCalling,
  selectedOption,
  setSelectedOption,
}: StartProps) => {
  return (
    <div className="w-full relative h-full flex items-center justify-between py-2 flex-col">
      <div className="flex flex-col gap-3 items-center">
        <p className={`text-5xl text-gray-800 ${dmsans.className} font-bold `}>
          Call Convo Boy
        </p>
        <p className={`text-sm text-gray-600 ${nunito.className} `}>
          Ready to connect
        </p>
      </div>
      <LevelChooser
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="flex flex-col items-center gap-8">
        <div
          onClick={handleStartCalling}
          className="flex items-center bg-size-[200%_200%] gap-2 shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all cursor-pointer px-4 py-3 rounded-full bg-linear-to-r from-[#00C9B5] to-[#14C900] hover:animate-gradient-flow"
        >
          <CallSVG className="mr-1" width={30} height={30} fill="white" />
          <p className={`font-bold text-white ${nunito.className} `}>
            Start Session
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-600">Click to initiate call</p>
    </div>
  );
};
