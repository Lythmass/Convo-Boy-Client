import { useRef, useState } from "react";

export const useManageCall = () => {
  const [hasStartedSession, setHasStartedSession] = useState(false);
  const [hasFinishedSession, setHasFinishedSession] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const callTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleStartCalling = () => {
    setIsCalling(true);
    callTimeoutRef.current = setTimeout(() => {
      setIsCalling(false);
      setHasStartedSession(true);
    }, 4000);
  };

  const handleHangup = () => {
    if (callTimeoutRef.current) {
      clearTimeout(callTimeoutRef.current);
      callTimeoutRef.current = null;
    }
    setIsCalling(false);
  };

  return {
    hasStartedSession,
    setHasStartedSession,
    hasFinishedSession,
    setHasFinishedSession,
    isCalling,
    setIsCalling,
    handleStartCalling,
    handleHangup,
  };
};
