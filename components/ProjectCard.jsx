"use client";
import { ExternalLinkIcon } from "./Icons";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start justify-between mb-6">
        <div
          className={`w-12 h-12 ${project.iconBg} rounded-xl flex items-center justify-center`}
        >
          <project.icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex gap-2">
          {project.links.map((link, index) => {
            // Only render if the link is not ExternalLinkIcon or if it's ExternalLinkIcon with a valid URL
            if (
              link.icon !== ExternalLinkIcon ||
              (link.icon === ExternalLinkIcon && link.url && link.url !== "#")
            ) {
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                  title={link.label}
                >
                  <link.icon className="w-4 h-4 text-gray-600" />
                </a>
              );
            }
            return null;
          })}
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
