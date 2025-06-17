// components/HeroSection.jsx
"use client";
import AvailabilityBadge from "./AvailabilityBadge";

export default function HeroSection() {
  return (
    <div className="text-center mb-16">
      <AvailabilityBadge />
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
        Julius Matheka Charles
        <br />
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Data Scientist & Full-Stack Developer
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Versatile Data Science Specialist and Full-Stack Developer, specializing
        in machine learning models, data visualization, web applications, and
        AI-driven insights.
      </p>
    </div>
  );
}
