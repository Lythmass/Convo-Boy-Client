import Background from "./Background";
import { EndCallButton } from "./EndCallButton";
import LionIdle from "./LionIdle";
import SpeakButton from "./SpeakButton";
import { Timer } from "./Timer";

interface ISpeakProps {
  isAudioPlaying: boolean;
  isRecording: boolean;
  handleBeginRecording: () => void;
  handleStopRecording: () => void;
  handleHangup: (isEndingConversation?: boolean) => void;
}

export const Speak = ({
  isAudioPlaying,
  isRecording,
  handleBeginRecording,
  handleStopRecording,
  handleHangup,
}: ISpeakProps) => {
  return (
    <div className="w-full rounded-3xl sm:rounded-4xl relative z-10 gap-5 flex flex-col items-center h-full">
      <Background />
      <Timer />
      <LionIdle isPlayingAudio={isAudioPlaying} />
      <div className="w-full h-full flex gap-4 sm:gap-5 items-end justify-center z-100 p-3 sm:p-4">
        <EndCallButton handleHangup={handleHangup} />
        <SpeakButton
          isRecording={isRecording}
          handleBeginRecording={handleBeginRecording}
          handleStopRecording={handleStopRecording}
        />
      </div>
    </div>
  );
};
