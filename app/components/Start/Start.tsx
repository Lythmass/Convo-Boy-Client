import { dmsans, nunito } from "@/app/fonts";
import CallSVG from "../SVGs/CallSVG";

interface StartProps {
  setHasStartedSession: (value: boolean) => void;
}

export const Start = ({ setHasStartedSession }: StartProps) => {
  return (
    <div className="w-full relative h-full flex items-center justify-center flex-col">
      <div className="flex absolute top-5 flex-col gap-3 items-center">
        <p className={`text-5xl text-gray-900 ${dmsans.className} font-bold `}>
          Call Convo Boy
        </p>
        <p className={`text-sm text-gray-600 ${nunito.className} `}>
          Ready to connect
        </p>
      </div>
      <div className="flex mt-25 flex-col items-center gap-2">
        <div
          onClick={() => setHasStartedSession(true)}
          className="flex items-center gap-2 shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all cursor-pointer px-4 py-3 rounded-full bg-linear-to-r from-[#00C9B5] to-[#14C900]"
        >
          <CallSVG className="mr-1" width={30} height={30} fill="white" />
          <p className={`font-bold text-white ${nunito.className} `}>
            Start Session
          </p>
        </div>
      </div>
      <p className="text-sm absolute bottom-0 text-gray-600">
        Click to initiate call
      </p>
    </div>
  );
};
