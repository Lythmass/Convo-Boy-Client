"use client";
import { useSendMessage } from "./hooks/useSendMessage";
import useBeginRecording from "./hooks/useBeginRecording";
import { useManageCall } from "./hooks/useManageCall";
import { Speak } from "./components/Speak/Speak";
import { Start } from "./components/Start/Start";
import { End } from "./components/End/End";
import { Calling } from "./components/Start/Calling";
export default function ChatPage() {
  const {
    hasStartedSession,
    hasFinishedSession,
    setHasFinishedSession,
    setHasStartedSession,
    handleStartCalling,
    handleHangup,
    isCalling,
  } = useManageCall();

  const { sendMessage, isAudioPlaying, history } = useSendMessage({
    setHasFinishedSession,
    setHasStartedSession,
  });
  const { handleBeginRecording, isRecording, handleStopRecording } =
    useBeginRecording({ sendMessage });

  return (
    <div className="w-full bg-size-[400%_400%] animate-gradient-flow bg-linear-120 from-[#102428] to-[#141028] h-screen flex justify-center items-center mx-auto p-8">
      <div
        className={`flex overflow-hidden justify-center items-start shadow-2xl rounded-4xl bg-linear-to-r from-[#C5E8D8] to-[#C5D5E8] transition-all ${!hasStartedSession && !hasFinishedSession && !isCalling ? "h-80 w-120 py-7" : "h-[calc(100vh-5rem)] w-130"}`}
      >
        {hasStartedSession && (
          <Speak
            isAudioPlaying={isAudioPlaying}
            isRecording={isRecording}
            handleBeginRecording={handleBeginRecording}
            handleStopRecording={handleStopRecording}
            handleHangup={handleHangup}
          />
        )}

        {!isCalling && !hasStartedSession && !hasFinishedSession && (
          <Start handleStartCalling={handleStartCalling} />
        )}
        {isCalling && <Calling handleHangup={handleHangup} />}
        {hasFinishedSession && (
          <End
            closeEndScreen={() => setHasFinishedSession(false)}
            messages={history}
          />
        )}
      </div>
    </div>
  );
}
