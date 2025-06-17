// components/ContactCard.jsx
"use client";

import { ExternalLinkIcon } from "lucide-react";

export default function ContactCard({ contact }) {
  return (
    <a
      href={contact.href}
      target={contact.external ? "_blank" : "_self"}
      rel={contact.external ? "noopener noreferrer" : ""}
      className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex items-center">
        <div
          className={`w-12 h-12 ${contact.iconBg} rounded-xl flex items-center justify-center mr-4`}
        >
          <contact.icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {contact.label}
          </h3>
          <p className="text-gray-600">{contact.value}</p>
        </div>
        {contact.external && (
          <ExternalLinkIcon className="w-4 h-4 text-gray-400 ml-auto group-hover:text-gray-600 transition-colors" />
        )}
      </div>
    </a>
  );
}
