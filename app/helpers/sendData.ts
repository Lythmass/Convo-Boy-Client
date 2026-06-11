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

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CONVO_BOY_API}/chat`,
    {
      method: "POST",
      body: formData,
    },
  );

  const data = await response.json();
  return data;
};
