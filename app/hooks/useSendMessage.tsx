import { useState } from "react";

type History = {
  role: "user" | "assistant" | "system";
  content: string;
};

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<History[]>([]);

  const sendMessage = async (audioBlob: Blob) => {
    if (!audioBlob) {
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("history", JSON.stringify(history));
      formData.append("audio_file", audioBlob, "recording.wav");

      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setHistory((prev) => [...prev, ...data.reply]);
      const audio = new Audio(`data:audio/mp3;base64,${data.audio_file}`);
      audio.play();
    } catch (error) {
      console.error("Failed to chat:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, setLoading, history, setHistory, sendMessage };
};
