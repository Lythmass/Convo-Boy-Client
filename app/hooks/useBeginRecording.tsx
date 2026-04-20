import { useRef, useState } from "react";

interface IUseBeginRecording {
  sendMessage: (audioBlob: Blob) => void;
}

export const useBeginRecording = ({ sendMessage }: IUseBeginRecording) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const handleBeginRecording = async () => {
    setIsRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    chunksRef.current = [];

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunksRef.current.push(e.data);
    };

    mediaRecorder.onstop = async () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      await sendMessage(blob);
      stream.getTracks().forEach((track) => track.stop());
    };

    mediaRecorder.start();
    setIsRecording(true);
  };

  const handleStopRecording = async () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  return {
    handleBeginRecording,
    isRecording,
    mediaRecorderRef,
    chunksRef,
    setIsRecording,
    handleStopRecording,
  };
};

export default useBeginRecording;
