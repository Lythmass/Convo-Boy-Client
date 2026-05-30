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

  const {
    sendMessage,
    isAudioPlaying,
    history,
    setHistory,
    selectedOption,
    setSelectedOption,
  } = useSendMessage({
    setHasFinishedSession,
    setHasStartedSession,
  });
  const { handleBeginRecording, isRecording, handleStopRecording } =
    useBeginRecording({ sendMessage });

  return (
    <div className="w-full bg-size-[400%_400%] animate-gradient-flow bg-linear-120 from-[#102428] to-[#141028] min-h-dvh flex justify-center items-center mx-auto p-3 sm:p-6 md:p-8">
      <div
        className={`flex justify-center items-start shadow-2xl rounded-3xl sm:rounded-4xl bg-linear-to-r from-[#C5E8D8] to-[#C5D5E8] transition-all ${!hasStartedSession && !hasFinishedSession && !isCalling ? "min-h-[24rem] w-full max-w-[30rem] px-4 py-6 sm:h-100 sm:px-0 sm:py-7" : "overflow-hidden h-[calc(100dvh-1.5rem)] w-full max-w-[32.5rem] sm:h-[calc(100dvh-3rem)] md:h-[calc(100vh-5rem)]"}`}
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
          <Start
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            handleStartCalling={handleStartCalling}
          />
        )}
        {isCalling && <Calling handleHangup={handleHangup} />}
        {hasFinishedSession && (
          <End
            closeEndScreen={() => {
              setHistory([]);
              setHasFinishedSession(false);
            }}
            messages={history}
          />
        )}
      </div>
    </div>
  );
}
