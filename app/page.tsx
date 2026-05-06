"use client";
import { useSendMessage } from "./hooks/useSendMessage";
import useBeginRecording from "./hooks/useBeginRecording";
import SpeakButton from "./components/SpeakButton";
import LionIdle from "./components/LionIdle";

export default function ChatPage() {
  const { sendMessage, isAudioPlaying } = useSendMessage();
  const { handleBeginRecording, isRecording, handleStopRecording } =
    useBeginRecording({ sendMessage });

  return (
    <div className="w-full h-screen flex justify-center items-center mx-auto p-8">
      <div className="w-full relative z-10 gap-5 flex flex-col items-center max-w-xl h-[calc(100vh-5rem)] shadow-[0_0_30px_5px_rgba(0,0,0,0.5)] rounded-lg border-2 border-gray-200">
        <LionIdle isPlayingAudio={isAudioPlaying} />
        <SpeakButton
          isRecording={isRecording}
          handleBeginRecording={handleBeginRecording}
          handleStopRecording={handleStopRecording}
        />
      </div>
    </div>
  );
}
