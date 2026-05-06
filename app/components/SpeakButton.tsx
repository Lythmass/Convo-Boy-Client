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
  return (
    <div
      onMouseDown={handleBeginRecording}
      onMouseUp={handleStopRecording}
      className={`p-4 cursor-pointer mt-auto rounded-full ${
        isRecording ? "bg-red-500 animate-pulse" : "bg-gray-200"
      }`}
    >
      {isRecording ? "..." : "🎤"}
    </div>
  );
};

export default SpeakButton;
