import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkshopRegisterModal from "../WorkshopRegisterModal";

export const anastamosDetails = {
  title: "ANASTAMOS • Basic Suturing Skills",
  description: "Universal precautions, OT etiquette, patient preparation, hand scrubbing, gowning/gloving, basic suturing, knotting, personal kit provided.",
  topic: undefined,
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Universal precaution",
    "Operation theatre etiquette",
    "Patient preparation",
    "Hand scrubbing",
    "Gowning and gloving techniques",
    "Basic suturing skills",
    "Suturing",
    "Hand knotting techniques"
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: undefined,
    team: undefined,
    prize: undefined,
    fee: "₹500"
  },
  incharge: "Benifer M, Abhinayashree R",
  prerequisites: "Medical students",
  date: "10/10/2025 (Friday)",
  time: "9:00 AM to 12:30 PM (Forenoon session)"
};

export default function AnastamosPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const workshopDetails = {
    name: "ANASTAMOS • Basic Suturing Skills",
    price: "₹500",
    date: "10/10/2025 (Friday)",
    time: "9:00 AM to 12:30 PM (Forenoon session)",
    incharges: "Benifer M, Abhinayashree R",
    prerequisites: "Medical students"
  };

  return (
    <>
      <div className="min-h-screen pt-16 pb-24 px-6">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-6 flex items-center px-3 py-1 rounded-lg bg-cyan-900/70 border border-cyan-400/30 text-cyan-200 hover:bg-cyan-800/90 hover:text-white transition-all shadow-sm"
          style={{ zIndex: 10 }}
          aria-label="Back"
        >
          <span className="mr-1 text-lg" aria-hidden="true">&#8592;</span>
          <span className="text-sm font-medium">Back</span>
        </button>
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">ANASTAMOS • Basic Suturing Skills</h2>
        <p className="text-lg text-white/80 mb-2">
          Universal precautions, OT etiquette, patient preparation, hand scrubbing, gowning/gloving, basic suturing, knotting, personal suturing kit provided.
        </p>
        <ul className="text-white/70 mb-4 list-disc pl-6">
          <li>Universal precautions</li>
          <li>Operation theatre etiquette</li>
          <li>Patient preparation</li>
          <li>Hand scrubbing</li>
          <li>Gowning and gloving techniques</li>
          <li>Basic suturing skills</li>
          <li>Hand knotting techniques</li>
          <li>Personal suturing kit provided</li>
        </ul>
        <div className="flex gap-4 mb-4">
          <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
            📅 10/10/2025 (Friday)
          </div>
          <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
            ⏰ 9:00 AM to 12:30 PM (Forenoon session)
          </div>
        </div>
        <div className="text-white/60 mb-2">Incharges: Benifer M, Abhinayashree R</div>
        <div className="text-white/60 mb-2">Duration: 4 hours (Forenoon session)</div>
        <div className="text-white/60 mb-2">Prerequisites: Medical students</div>
        <div className="text-white/60 mb-2">Personal suturing kit provided.</div>
<div className="flex flex-col items-center mt-2 gap-3">
  <button
    className="w-full bg-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-full cursor-not-allowed opacity-70"
    disabled
    aria-disabled="true"
    tabIndex={-1}
    style={{ pointerEvents: "none" }}
  >
    Registration Closed
  </button>
  <button
    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
    onClick={() => navigate('/accommodation')}
  >
    Get Accommodation
  </button>
</div>
      </div>
    </>
  );
}
