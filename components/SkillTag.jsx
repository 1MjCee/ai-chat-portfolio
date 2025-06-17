// components/SkillTag.jsx
"use client";

export default function SkillTag({ skill }) {
  return (
    <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:from-blue-500/20 hover:to-indigo-500/20 transition-all duration-200">
      {skill}
    </span>
  );
}
