import { HangupSVG } from "../SVGs/HangupSVG";
import { Button } from "./Button";

interface IEndCallButtonProps {
  handleHangup: (isEndingConversation?: boolean) => void;
}

export const EndCallButton = ({ handleHangup }: IEndCallButtonProps) => {
  return (
    <Button
      className="bg-red-500 hover:bg-red-600"
      handleClick={() => handleHangup(true)}
    >
      <HangupSVG width={28} height={28} fill="white" />
    </Button>
  );
};
