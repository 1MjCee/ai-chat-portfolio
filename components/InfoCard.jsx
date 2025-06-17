// components/InfoCard.jsx
"use client";

export default function InfoCard({ title, children, icon: Icon }) {
  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center mb-6">
        <div
          className={`w-12 h-12 ${Icon.bgColor} rounded-xl flex items-center justify-center mr-4`}
        >
          <Icon.component className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}
