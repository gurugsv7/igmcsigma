import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkshopRegisterModal from "../WorkshopRegisterModal";

function Paramatrix({ onRegister }: { onRegister: () => void }) {
  const navigate = useNavigate();
  return (
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">PARAMATRIX • Paramedical Workshop</h2>
      <p className="text-lg text-white/80 mb-2">
        Emergencies demand clarity, speed, and skill. PARAMATRIX prepares paramedical students to handle critical drugs, protocols, and scenarios with confidence—turning knowledge into action when it matters most. This workshop ensures practical insight, engaging learning, and confidence to excel in both academic and clinical practice.
      </p>
      <ul className="text-white/70 mb-4 list-disc pl-6">
        <li>Drug identification skills</li>
        <li>Crash cart medication knowledge and handling</li>
        <li>Infusion preparation and rate calculation</li>
        <li>Emergency drug box organization</li>
        <li>High alert medication safety practices</li>
        <li>Scenario based emergency medication administration</li>
        <li>Hands on clinical skills at rotating stations</li>
        <li>Team and communication in emergencies</li>
        <li>Professional development and knowledge retention</li>
      </ul>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 11/10/2025 (Saturday)
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Forenoon (4 Hours)
        </div>
      </div>
      <div className="text-white/60 mb-2">Incharges: Sanjana Saira Giju, Sadra Saseendran</div>
      <div className="text-white/60 mb-2">Prerequisites: Paramedical students</div>
<div className="flex justify-center mt-4">
        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
          onClick={() => navigate("/register?event=Paramatrix")}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default Paramatrix;

export const paramatrixDetails = {
  title: "PARAMATRIX • Paramedical Workshop",
  description: "Emergencies demand clarity, speed, and skill. PARAMATRIX prepares paramedical students to handle critical drugs, protocols, and scenarios with confidence—turning knowledge into action when it matters most. This workshop ensures practical insight, engaging learning, and confidence to excel in both academic and clinical practice.",
  topic: undefined,
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Drug identification skills",
    "Crash cart medication knowledge and handling",
    "Infusion preparation and rate calculation",
    "Emergency drug box organization",
    "High alert medication safety practices",
    "Scenario based emergency medication administration",
    "Hands on clinical skills at rotating stations",
    "Team and communication in emergencies",
    "Professional development and knowledge retention"
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: undefined,
    team: undefined,
    prize: undefined,
    fee: undefined
  },
  incharge: "Sanjana Saira Giju, Sadra Saseendran",
  prerequisites: "Paramedical students",
  date: "11/10/2025 (Saturday)",
  time: "Forenoon (4 Hours)"
};
