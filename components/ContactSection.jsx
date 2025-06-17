// components/ContactSection.jsx
"use client";
import ContactCard from "./ContactCard";

// Contact icons
const EmailIcon = ({ className }) => (
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
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = ({ className }) => (
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
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LocationIcon = ({ className }) => (
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
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
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
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const contacts = [
  {
    label: "Email",
    value: "cjmatheka@gmail.com",
    href: "mailto:cjmatheka@gmail.com",
    icon: EmailIcon,
    iconBg: "bg-gradient-to-r from-red-500 to-pink-500",
    external: false,
  },
  {
    label: "Phone",
    value: "+254 101 048 520",
    href: "tel:+254700000000",
    icon: PhoneIcon,
    iconBg: "bg-gradient-to-r from-green-500 to-emerald-500",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/julius-matheka",
    href: "https://www.linkedin.com/in/julius-charles-24b91b89/",
    icon: LinkedInIcon,
    iconBg: "bg-gradient-to-r from-blue-600 to-blue-700",
    external: true,
  },
  {
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#",
    icon: LocationIcon,
    iconBg: "bg-gradient-to-r from-purple-500 to-indigo-500",
    external: false,
  },
];

export default function ContactSection() {
  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to collaborate on your next data science or web development
          project?
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </section>
  );
}
