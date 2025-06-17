// components/ChatInstructionsCard.jsx
"use client";
import InfoCard from "./InfoCard";

const ChatIcon = {
  component: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  ),
  bgColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
};

const chatItems = [
  {
    color: "bg-blue-500",
    text: "Machine Learning projects and web applications",
  },
  {
    color: "bg-indigo-500",
    text: "Data analysis and full-stack development",
  },
  {
    color: "bg-purple-500",
    text: "Professional certifications and tech skills",
  },
];

export default function ChatInstructionsCard() {
  return (
    <InfoCard title="Let's Chat" icon={ChatIcon}>
      <p className="text-gray-700 mb-4 leading-relaxed">
        Explore my data science and web development expertise:
      </p>
      <div className="space-y-3">
        {chatItems.map((item, index) => (
          <div key={index} className="flex items-center text-gray-700">
            <div className={`w-2 h-2 ${item.color} rounded-full mr-3`} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </InfoCard>
  );
}
