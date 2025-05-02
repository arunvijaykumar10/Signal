import { Clock, Image, Mic, Paperclip, Send, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Assistant = () => {
  // Conversation state
  const [messages, setMessages] = useState([
    { role: "assistant", content: "How can I help with your content today?" },
    {
      role: "user",
      content:
        "Can you help me write a product description for our new analytics dashboard?",
    },
    {
      role: "assistant",
      content:
        "I'd be happy to help with that. Could you provide some key features or benefits you want to highlight in the description?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  // Auto-scroll to bottom of messages
  const messagesEndRef = useRef<any>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Prompt shortcuts based on wireframe spec
  const promptShortcuts = [
    "Summarize campaign",
    "Rewrite this",
    "Make more concise",
    "Change tone to professional",
    "Generate headline options",
  ];

  // Handle sending a new message
  const handleSendMessage = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { role: "user", content: input }]);
      setInput("");

      // Simulate assistant response (in a real implementation, this would call an API)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `I understand you want to ${input.toLowerCase()}. Let me help you with that.`,
          },
        ]);
      }, 1000);
    }
  };

  // Handle keyboard shortcuts
  const handleKeyPress = (e: {
    key: string;
    shiftKey: boolean;
    preventDefault: () => void;
  }) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* <button className="mr-3 text-gray-500 hover:text-gray-700">
            <ArrowLeft size={20} />
          </button> */}
          <h1 className="text-xl font-semibold">Brand Voice Assistant</h1>
        </div>

        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded">
            <Settings size={18} />
          </button>
          <button className="flex items-center px-3 py-1.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
            <Clock size={16} className="mr-1.5" />
            <span className="text-sm">Memory</span>
          </button>
        </div>
      </header>

      <div className="flex-1 flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-md p-4 rounded-lg shadow ${
                    message.role === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Prompt Shortcuts */}
        <div className="bg-white border-t border-gray-200 p-3">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {promptShortcuts.map((prompt, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full"
                  onClick={() => setInput(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="flex gap-2 items-center">
          <div className="relative flex-1">
            <textarea
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 resize-none text-sm"
              rows={2}
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className={`absolute right-3 bottom-3 p-1 rounded-full ${
                isRecording
                  ? "bg-red-100 text-red-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setIsRecording(!isRecording)}
            >
              <Mic size={20} />
            </button>
          </div>

          <button
            className="flex items-center justify-center px-4 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
            onClick={handleSendMessage}
          >
            <Send size={26} className="mr-1" />
            Send
          </button>
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex space-x-2">
            <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
              <Paperclip size={14} className="mr-1" />
              Attach
            </button>
            <button className="flex items-center text-xs text-gray-500 hover:text-gray-700">
              <Image size={14} className="mr-1" />
              Image
            </button>
          </div>

          <div className="flex space-x-2">
            <button className="px-2 py-1 text-xs bg-indigo-50 text-indigo-600 rounded hover:bg-indigo-100">
              Send to Draft Editor
            </button>
            <button className="px-2 py-1 text-xs bg-indigo-50 text-indigo-600 rounded hover:bg-indigo-100">
              Save as Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
