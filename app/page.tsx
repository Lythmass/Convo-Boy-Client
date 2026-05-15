"use client";
import { useSendMessage } from "./hooks/useSendMessage";
import useBeginRecording from "./hooks/useBeginRecording";
import { useManageCall } from "./hooks/useManageCall";
import Background from "./components/Speak/Background";
import { Speak } from "./components/Speak/Speak";
import { Start } from "./components/Start/Start";
import { End } from "./components/End/End";

export default function ChatPage() {
  const { sendMessage, isAudioPlaying } = useSendMessage();
  const { handleBeginRecording, isRecording, handleStopRecording } =
    useBeginRecording({ sendMessage });

  const { hasStartedSession, hasFinishedSession, setHasStartedSession } =
    useManageCall();

  return (
    <>
      {hasStartedSession && <Background />}

      <div className="w-full bg-gray-800 h-screen flex justify-center items-center mx-auto p-8">
        <div className="max-w-xl w-full py-7 flex justify-center items-start shadow-2xl rounded-lg bg-gray-900 h-[calc(100vh-5rem)]">
          {hasStartedSession && (
            <Speak
              isAudioPlaying={isAudioPlaying}
              isRecording={isRecording}
              handleBeginRecording={handleBeginRecording}
              handleStopRecording={handleStopRecording}
            />
          )}

          {!hasStartedSession && !hasFinishedSession && (
            <Start setHasStartedSession={setHasStartedSession} />
          )}
          {hasFinishedSession && <End />}
        </div>
      </div>
    </>
  );
}
