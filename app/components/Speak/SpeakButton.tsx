import { useState } from "react";
import MicrophoneSVG from "../SVGs/MicrophoneSVG";
import { Button } from "./Button";

interface ISpeakButtonProps {
  isRecording: boolean;
  handleBeginRecording: () => void;
  handleStopRecording: () => void;
}

export const SpeakButton: React.FC<ISpeakButtonProps> = ({
  isRecording,
  handleBeginRecording,
  handleStopRecording,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = () => {
    if (!isPressed) {
      setIsPressed(true);
      handleBeginRecording();
      return;
    }
    setIsPressed(false);
    handleStopRecording();
  };

  return (
    <Button
      className={`border-3 ${isRecording ? "border-red-500 hover:bg-red-500" : "border-cyan-500 hover:bg-cyan-500"}`}
      handleClick={handleClick}
    >
      {!isRecording && <MicrophoneSVG width={25} height={25} fill="#fff" />}
      {isRecording && (
        <div className="relative w-5 h-5">
          <div className="absolute w-full h-full top-0 left-0 animate-ring-expand bg-white rounded-full" />
          <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
        </div>
      )}
    </Button>
  );
};

export default SpeakButton;
