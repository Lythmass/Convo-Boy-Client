"use client";
import { useSendMessage } from "./hooks/useSendMessage";
import useBeginRecording from "./hooks/useBeginRecording";

export default function ChatPage() {
  const { loading, history, sendMessage } = useSendMessage();
  const { handleBeginRecording, isRecording, handleStopRecording } =
    useBeginRecording({ sendMessage });

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-800 mx-auto p-8">
      <div className="w-full flex flex-col items-center max-w-xl h-[calc(100vh-5rem)] shadow-2xl rounded-lg p-6  bg-gray-900">
        {" "}
        <div
          onMouseDown={handleBeginRecording}
          onMouseUp={handleStopRecording}
          className={`p-4 cursor-pointer mt-auto rounded-full ${
            isRecording ? "bg-red-500 animate-pulse" : "bg-gray-200"
          }`}
        >
          {isRecording ? "..." : "🎤"}
        </div>
      </div>
    </div>
  );
}
