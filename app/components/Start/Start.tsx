import CallSVG from "../SVGs/CallSVG";

interface StartProps {
  setHasStartedSession: (value: boolean) => void;
}

export const Start = ({ setHasStartedSession }: StartProps) => {
  return (
    <div className="w-full relative h-full flex items-center justify-center gap-10 flex-col">
      <p className="text-6xl absolute top-5 text-gray-200 font-bold">
        Call Convo Boy
      </p>
      <div
        onClick={() => setHasStartedSession(true)}
        className="w-24 animate-heartbeat cursor-pointer h-24 flex justify-center items-center rounded-full bg-green-300"
      >
        <CallSVG className="mr-1" width={60} height={60} fill="white" />
      </div>
    </div>
  );
};
