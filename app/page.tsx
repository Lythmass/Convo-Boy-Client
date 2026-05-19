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

      <div className="w-full bg-size-[400%_400%] animate-gradient-flow bg-linear-120 from-[#102428] to-[#141028] h-screen flex justify-center items-center mx-auto p-8">
        <div
          className={`py-7 flex justify-center items-start shadow-2xl rounded-4xl bg-linear-to-r from-[#C5E8D8] to-[#C5D5E8]  ${!hasStartedSession && !hasFinishedSession ? "h-80 w-120" : "h-[calc(100vh-5rem)] max-w-xl w-full"}`}
        >
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
