"use client";
import { useSendMessage } from "./hooks/useSendMessage";
import useBeginRecording from "./hooks/useBeginRecording";

export default function ChatPage() {
  const { loading, history, sendMessage } = useSendMessage();
  const { handleBeginRecording, isRecording, handleStopRecording } =
    useBeginRecording({ sendMessage });

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">AI Chat (No-DB Version)</h1>

      <div className="space-y-4 mb-8 h-125 overflow-y-auto border p-4 rounded-lg">
        {history
          .filter((m) => m.role !== "system")
          .map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg ${msg.role === "user" ? "bg-blue-100 ml-auto max-w-[80%]" : "bg-gray-100 mr-auto max-w-[80%]"}`}
            >
              <p className="text-sm font-semibold mb-1">
                {msg.role === "user" ? "You" : "AI"}
              </p>
              <p>{msg.content}</p>
            </div>
          ))}
        {loading && <p className="text-gray-400 italic">AI is thinking...</p>}
      </div>

      <div className="w-full flex gap-2">
        <button
          onMouseDown={handleBeginRecording}
          onMouseUp={handleStopRecording}
          className={`px-4 w-full py-2 rounded-full ${
            isRecording ? "bg-red-500 animate-pulse" : "bg-gray-200"
          }`}
        >
          {isRecording ? "Listening..." : "🎤 Hold to Speak"}
        </button>
      </div>
    </div>
  );
}
