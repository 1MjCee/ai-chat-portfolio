// components/AvailabilityBadge.jsx
"use client";

export default function AvailabilityBadge() {
  return (
    <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6">
      <div className="bg-white rounded-full px-6 py-2">
        <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Available for Work
        </span>
      </div>
    </div>
  );
}
