import { nunito } from "@/app/fonts";

export const UserMessage = ({ message }: { message: string }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="self-end flex items-center gap-2">
        <p className={`text-xs text-gray-600 ${nunito.className} `}>You</p>
        <p
          className={`text-xs ${nunito.className} bg-blue-400 rounded-full p-2 w-6 h-6 flex items-center justify-center text-center text-white font-bold`}
        >
          U
        </p>
      </div>
      <div className="w-[90%] bg-linear-to-r from-[#51A2FF] to-[#5751FF] rounded-l-xl rounded-br-xl p-4 self-end">
        <p className={`${nunito.className} text-gray-50`}>{message}</p>
      </div>
    </div>
  );
};
