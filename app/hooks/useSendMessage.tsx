import { useState } from "react";
import { sendData } from "../helpers/sendData";

export interface IHistory {
  role: "user" | "assistant" | "system";
  content: string;
}

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<IHistory[]>([]);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const sendMessage = async (audioBlob: Blob) => {
    if (!audioBlob) {
      return;
    }
    setLoading(true);
    try {
      const data = await sendData(audioBlob, history);

      setHistory((prev) => [...prev, ...data.reply]);
      const audio = new Audio(`data:audio/mp3;base64,${data.audio_file}`);
      audio.play();

      audio.addEventListener("playing", () => setIsAudioPlaying(true));
      audio.addEventListener("pause", () => setIsAudioPlaying(false));
      audio.addEventListener("ended", () => setIsAudioPlaying(false));
    } catch (error) {
      console.error("Failed to chat:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    history,
    setHistory,
    sendMessage,
    isAudioPlaying,
  };
};
