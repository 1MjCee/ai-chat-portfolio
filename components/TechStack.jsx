// components/TechStack.jsx
"use client";
import SkillTag from "./SkillTag";

const skills = [
  "Python",
  "JavaScript",
  "React",
  "Next Js",
  "Django",
  "Machine Learning",
  "Data Analysis",
  "SQL",
  "Node.js",
  "Tableau",
  "C",
  "Linux",
  "HTML/CSS",
  "Apache Airflow",
  "Scikit-Learn",
  "Pandas",
  "MongoDB",
  "Postgress",
];

export default function TechStack() {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Tech Stack
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <SkillTag key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
