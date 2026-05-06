"use client";
import { useSendMessage } from "./hooks/useSendMessage";
import useBeginRecording from "./hooks/useBeginRecording";
import SpeakButton from "./components/SpeakButton";

export default function ChatPage() {
  const { sendMessage } = useSendMessage();
  const { handleBeginRecording, isRecording, handleStopRecording } =
    useBeginRecording({ sendMessage });

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800 mx-auto p-8">
      <div className="w-full flex flex-col items-center max-w-xl h-[calc(100vh-5rem)] shadow-2xl rounded-lg p-6  bg-gray-900">
        {" "}
        <SpeakButton
          isRecording={isRecording}
          handleBeginRecording={handleBeginRecording}
          handleStopRecording={handleStopRecording}
        />
      </div>
    </div>
  );
}
