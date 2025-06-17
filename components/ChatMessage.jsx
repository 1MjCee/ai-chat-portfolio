// components/ChatMessage.jsx
"use client";

export default function ChatMessage({ message, isUser }) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
          isUser
            ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-br-md"
            : "bg-gray-50 text-gray-800 rounded-bl-md border border-gray-100"
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
      </div>
    </div>
  );
}
