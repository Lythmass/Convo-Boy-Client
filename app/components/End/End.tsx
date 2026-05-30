import { IHistory } from "@/app/hooks/useSendMessage";
import CallSVG from "../SVGs/CallSVG";
import { AIMessage } from "./AIMessage";
import { UserMessage } from "./UserMessage";
import { dmsans, nunito } from "@/app/fonts";
import CloseSVG from "../SVGs/CloseSVG";

interface IEndProps {
  messages: IHistory[];
  closeEndScreen: () => void;
}

export const End = ({ messages, closeEndScreen }: IEndProps) => {
  return (
    <div className="w-full h-full p-4 sm:p-5 flex flex-col items-center gap-4 sm:gap-5">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <p className={`${nunito.className} text-gray-800 text-xs`}>
            Call Ended
          </p>
        </div>
        <div
          className={`cursor-pointer bg-[#90a7c4] hover:bg-[#a2bcdc] transition-all rounded-full w-6 h-6 flex items-center justify-center`}
          onClick={closeEndScreen}
        >
          <CloseSVG fill="white" width={15} height={15} />
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <CallSVG
          className="bg-size-[200%_200%] z-10 bg-linear-to-r from-[#00C9B5] to-[#14C900] hover:animate-gradient-flow rounded-full p-3 sm:p-4 shadow-lg w-16 h-16 sm:w-20 sm:h-20"
          width={80}
          height={80}
          fill="white"
        />
        <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-green-500 z-20 border-3 sm:border-4 border-gray-800 rounded-full right-5 bottom-12" />
        <p className={`${dmsans.className} text-gray-900 font-bold`}>
          Convo Boy
        </p>
        <p className={`${nunito.className} text-gray-600`}>Review Your Call</p>
      </div>
      <div className="w-full h-full overflow-y-auto custom-scrollbar flex flex-col gap-3">
        {messages.map((message, index) => (
          <div key={index} className="w-full flex flex-col px-0 sm:px-3">
            {message.role === "assistant" && (
              <AIMessage message={message.content} />
            )}{" "}
            {message.role === "user" && (
              <UserMessage message={message.content} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
