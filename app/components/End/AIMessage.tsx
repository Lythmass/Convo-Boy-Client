import { nunito } from "@/app/fonts";

export const AIMessage = ({ message }: { message: string }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="self-start flex items-center gap-2">
        <p
          className={`text-xs ${nunito.className} bg-linear-to-r from-[#00C9B5] to-[#14C900] rounded-full p-2 w-6 h-6 flex items-center justify-center text-center text-white font-bold`}
        >
          CB
        </p>
        <p className={`text-xs text-gray-600 ${nunito.className} `}>
          Convo Boy
        </p>
      </div>
      <div className="w-[92%] sm:w-[90%] bg-linear-to-l from-[#DCFCE7] to-[#DCFCF7] rounded-r-xl rounded-bl-xl p-3 sm:p-4 self-start">
        <p className={`${nunito.className} text-sm sm:text-base break-words text-gray-900`}>
          {message}
        </p>
      </div>
    </div>
  );
};
