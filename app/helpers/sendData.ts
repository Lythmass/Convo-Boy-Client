import { IHistory } from "../hooks/useSendMessage";

export const sendData = async (audioBlob: Blob, history: IHistory[]) => {
  const formData = new FormData();
  formData.append("history", JSON.stringify(history));
  formData.append("audio_file", audioBlob, "recording.webm");

  const response = await fetch("http://127.0.0.1:8000/chat", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data;
};
