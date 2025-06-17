// components/Footer.jsx
"use client";
import { GithubIcon, LinkedInIcon, EmailIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-white/20 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Julius Matheka Charles
            </h3>
            <p className="text-gray-600 text-sm">
              Data Scientist & Full-Stack Developer
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/julius-matheka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/julius-matheka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:julius.matheka@example.com"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <EmailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Julius Matheka Charles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
