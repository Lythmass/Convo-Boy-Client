import { IOptionProps } from "../components/Start/Option";
import { IHistory } from "../hooks/useSendMessage";

export const sendData = async (
  audioBlob: Blob,
  history: IHistory[],
  selectedOption: IOptionProps | null,
) => {
  const formData = new FormData();
  formData.append("history", JSON.stringify(history));
  formData.append("audio_file", audioBlob, "recording.webm");
  formData.append("english_level", JSON.stringify(selectedOption?.value));

  const response = await fetch("http://127.0.0.1:8000/chat", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data;
};
