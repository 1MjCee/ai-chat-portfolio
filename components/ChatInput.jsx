// components/ChatInput.jsx
"use client";

export default function ChatInput({ input, onChange, onSubmit }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <div className="p-4 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
      <div className="flex gap-3">
        <input
          className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400 text-sm shadow-sm transition-all duration-200"
          value={input}
          onChange={onChange}
          placeholder="Ask about my data science projects, web development, or technical skills..."
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={onSubmit}
          disabled={!input.trim()}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
