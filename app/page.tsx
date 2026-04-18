"use client";
import { useState } from "react";

// Mirroring the structure we set up in FastAPI
type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export default function ChatPage() {
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newUserMessage: Message = { role: "user", content: input };
    const updatedHistory = [...history, newUserMessage];
    
    // Update UI immediately
    setHistory(updatedHistory);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: updatedHistory }),
      });

      const data = await response.json();
      
      // Add the AI's response to the history
      setHistory((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("Failed to chat:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-8 font-sans">
      <h1 className="text-2xl font-bold mb-6">AI Chat (No-DB Version)</h1>
      
      <div className="space-y-4 mb-8 h-[500px] overflow-y-auto border p-4 rounded-lg">
        {history.filter(m => m.role !== 'system').map((msg, i) => (
          <div key={i} className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-blue-100 ml-auto max-w-[80%]' : 'bg-gray-100 mr-auto max-w-[80%]'}`}>
            <p className="text-sm font-semibold mb-1">{msg.role === 'user' ? 'You' : 'AI'}</p>
            <p>{msg.content}</p>
          </div>
        ))}
        {loading && <p className="text-gray-400 italic">AI is thinking...</p>}
      </div>

      <div className="flex gap-2">
        <input 
          className="flex-1 border p-2 rounded text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask something..."
        />
        <button 
          onClick={sendMessage}
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </main>
  );
}