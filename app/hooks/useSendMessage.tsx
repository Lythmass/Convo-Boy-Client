import { useState } from "react";
import { sendData } from "../helpers/sendData";
import { IOptionProps } from "../components/Start/Option";
import { englishLevels } from "../helpers/englishLevels";

export interface IHistory {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface IChatResponse {
  reply: IHistory[];
  audio_file: string;
  is_last_message: boolean;
}

export interface IUseSendMessage {
  setHasFinishedSession: React.Dispatch<React.SetStateAction<boolean>>;
  setHasStartedSession: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useSendMessage = ({
  setHasFinishedSession,
  setHasStartedSession,
}: IUseSendMessage) => {
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<IHistory[]>([]);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOptionProps | null>(
    englishLevels[0],
  );

  const sendMessage = async (audioBlob: Blob) => {
    if (!audioBlob) {
      return;
    }
    setLoading(true);
    try {
      const data: IChatResponse = await sendData(audioBlob, history);
      setHistory((prev) => [...prev, ...data.reply]);
      const audio = new Audio(`data:audio/mp3;base64,${data.audio_file}`);
      audio.play();

      audio.addEventListener("playing", () => setIsAudioPlaying(true));
      audio.addEventListener("pause", () => setIsAudioPlaying(false));
      audio.addEventListener("ended", () => {
        setIsAudioPlaying(false);
        if (data.is_last_message) {
          setHasFinishedSession(true);
          setHasStartedSession(false);
        }
      });
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
    selectedOption,
    setSelectedOption,
  };
};
