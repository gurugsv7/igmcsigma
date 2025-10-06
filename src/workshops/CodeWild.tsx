import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkshopRegisterModal from "../WorkshopRegisterModal";

export const codeWildDetails = {
  title: "CODE WILD • Wilderness Medicine",
  description: "Far from hospitals, survival depends on resourcefulness and resolve. CODE WILD challenges you to adapt, improvise, and deliver care in the most unpredictable of environments—where every decision carries weight. This workshop ensures practical insight, engaging learning, and confidence to excel in both academic and clinical practice.",
  topic: undefined,
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Wilderness medicine principles for remote environments",
    "Improvised splinting using natural outdoor materials",
    "Hemorrhage control: tourniquets and pressure dressing",
    "Heat stroke, hypothermia, dehydration emergency management",
    "Identification and 1st aid for envenomation",
    "Snakebite management stimulation and emergency response",
    "Navigation and rescue signaling for wilderness scenarios",
    "Search and rescue triage: injured hiker care",
    "Survival kit essentials and emergency preparedness"
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: undefined,
    team: undefined,
    prize: undefined,
    fee: "₹500"
  },
  incharge: "Sangeetha K, Mohammed Ameen Can",
  prerequisites: "Medical students",
  date: "11/10/2025 (Saturday)",
  time: "8:00 AM to 4:00 PM (Full day session)"
};

export default function CodeWildPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const workshopDetails = {
    name: "CODE WILD • Wilderness Medicine",
    price: "₹500",
    date: "11/10/2025 (Saturday)",
    time: "8:00 AM to 4:00 PM (Full day session)",
    incharges: "Sangeetha K, Mohammed Ameen Can",
    prerequisites: "Medical students"
  };

  return (
    <>
      <div className="min-h-screen pt-8 pb-24 px-6">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-6 flex items-center px-3 py-1 rounded-lg bg-cyan-900/70 border border-cyan-400/30 text-cyan-200 hover:bg-cyan-800/90 hover:text-white transition-all shadow-sm"
          style={{ zIndex: 10 }}
          aria-label="Back"
        >
          <span className="mr-1 text-lg" aria-hidden="true">&#8592;</span>
          <span className="text-sm font-medium">Back</span>
        </button>
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">CODE WILD • Wilderness Medicine</h2>
        <p className="text-lg text-white/80 mb-2">
          Far from hospitals, survival depends on resourcefulness and resolve. CODE WILD challenges you to adapt, improvise, and deliver care in the most unpredictable of environments—where every decision carries weight. This workshop ensures practical insight, engaging learning, and confidence to excel in both academic and clinical practice.
        </p>
        <ul className="text-white/70 mb-4 list-disc pl-6">
          <li>Wilderness medicine principles for remote environments</li>
          <li>Improvised splinting using natural outdoor materials</li>
          <li>Hemorrhage control: tourniquets and pressure dressing</li>
          <li>Heat stroke, hypothermia, dehydration emergency management</li>
          <li>Identification and 1st aid for envenomation</li>
          <li>Snakebite management stimulation and emergency response</li>
          <li>Navigation and rescue signaling for wilderness scenarios</li>
          <li>Search and rescue triage: injured hiker care</li>
          <li>Survival kit essentials and emergency preparedness</li>
        </ul>
        <div className="flex gap-4 mb-4">
          <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
            📅 11/10/2025 (Saturday)
          </div>
          <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
            ⏰ 8:00 AM to 4:00 PM (Full day session)
          </div>
        </div>
      <div className="text-white/60 mb-2">Incharges: Sangeetha K, Mohammed Ameen Can</div>
      <div className="text-white/60 mb-2">Prerequisites: Medical students</div>

        <div className="flex flex-col items-center mt-4 gap-3">
          <div className="font-bold text-cyan-300 mb-2">Inclusive of lunch</div>
<button
            disabled
            className="w-full bg-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-full cursor-not-allowed opacity-70"
          >
            Registration Closed
          </button>
          <button
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
            onClick={() => navigate('/accommodation')}
          >
            Get Accommodation
          </button>
        </div>
      </div>
    </>
  );
}
