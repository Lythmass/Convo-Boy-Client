import { useState } from "react";

export const useManageCall = () => {
  const [hasStartedSession, setHasStartedSession] = useState(false);
  const [hasFinishedSession, setHasFinishedSession] = useState(false);

  return {
    hasStartedSession,
    setHasStartedSession,
    hasFinishedSession,
    setHasFinishedSession,
  };
};
