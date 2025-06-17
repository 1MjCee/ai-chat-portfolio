// components/AboutCard.jsx
"use client";
import InfoCard from "./InfoCard";

const UserIcon = {
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
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
  bgColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
};

export default function AboutCard() {
  return (
    <InfoCard title="About Me" icon={UserIcon}>
      <p className="text-gray-700 leading-relaxed">
        Data Science Specialist and Full-Stack Developer with expertise in
        analyzing and visualizing data, building Machine Learning models, and
        developing websites and applications. Experienced in web scraping, time
        series forecasting, customer churn prediction, and creating end-to-end
        web solutions.
      </p>
    </InfoCard>
  );
}
