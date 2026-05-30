import { nunito } from "@/app/fonts";
import DropdownSVG from "../SVGs/DropdownSVG";
import { useState } from "react";
import { englishLevels } from "@/app/helpers/englishLevels";
import { IOptionProps, Option } from "./Option";

interface ILevelChooserProps {
  selectedOption: IOptionProps | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<IOptionProps | null>>;
}

export const LevelChooser = ({
  selectedOption,
  setSelectedOption,
}: ILevelChooserProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full max-w-72 sm:w-1/2 flex items-center select-none justify-center flex-col gap-2">
      <p className={`${nunito.className} capitalize text-sm text-gray-600`}>
        English Level
      </p>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full relative hover:backdrop-brightness-90 transition-all backdrop-brightness-95 cursor-default flex items-center justify-center border border-slate-400 p-3 rounded-xl"
      >
        <p
          className={`${nunito.className} ml-auto capitalize font-semibold text-sm text-center text-gray-900`}
        >
          {selectedOption
            ? `${selectedOption.level} - ${selectedOption.value}`
            : "Select Level"}
        </p>
        <DropdownSVG
          className="ml-auto"
          width={12}
          height={12}
          fill="#101828"
        />
        {isOpen && (
          <div className="absolute shadow-2xl top-full z-1000 left-0 w-full mt-2 backdrop-brightness-95 bg-[#BBD3D4] border border-slate-400 rounded-xl">
            {englishLevels.map((level) => {
              return (
                <div onClick={() => setSelectedOption(level)} key={level.id}>
                  <Option
                    id={level.id}
                    level={level.level}
                    value={level.value}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
