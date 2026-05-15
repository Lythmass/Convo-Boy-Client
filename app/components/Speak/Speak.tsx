import LionIdle from "./LionIdle";
import SpeakButton from "./SpeakButton";

interface ISpeakProps {
  isAudioPlaying: boolean;
  isRecording: boolean;
  handleBeginRecording: () => void;
  handleStopRecording: () => void;
}

export const Speak = ({
  isAudioPlaying,
  isRecording,
  handleBeginRecording,
  handleStopRecording,
}: ISpeakProps) => {
  return (
    <div className="w-full relative z-10 gap-5 flex flex-col items-center h-full border-2 border-gray-200">
      <LionIdle isPlayingAudio={isAudioPlaying} />
      <SpeakButton
        isRecording={isRecording}
        handleBeginRecording={handleBeginRecording}
        handleStopRecording={handleStopRecording}
      />
    </div>
  );
};
