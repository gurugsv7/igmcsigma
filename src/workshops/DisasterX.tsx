import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkshopRegisterModal from "../WorkshopRegisterModal";

function DisasterX({ onRegister }: { onRegister: () => void }) {
  const navigate = useNavigate();
  return (
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">DISASTER X • Disaster Management Workshop</h2>
      <div className="text-center text-cyan-200 font-semibold mb-2">TAGLINE: “DISASTER PARADIGM IN ACTION”</div>
      <p className="text-lg text-white/80 mb-2">
        Crisis tests more than skill—it tests resilience and leadership. DISASTER X immerses you in real-world scenarios, training you to coordinate, triage, and act decisively when faced with large-scale emergencies. This workshop ensures practical insight, engaging learning, and confidence to excel in both academic and clinical practice.
      </p>
      <ul className="text-white/70 mb-4 list-disc pl-6">
        <li>Disaster scenario assessment and medical response coordination</li>
        <li>Strategic planning for hospital fire evacuation</li>
        <li>Chemical mass casualty incident management</li>
        <li>Application of triage principles and victim prioritization</li>
        <li>Critical thinking in emergency situations</li>
        <li>Rapid clinical decision making in emergencies</li>
        <li>Spatial awareness for hospital evacuation logistics</li>
        <li>Experiential learning through medical emergency stimulations</li>
      </ul>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 10/10/2025 (Friday)
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ 8:00 AM to 4:00 PM (Full day session)
        </div>
      </div>
      <div className="text-white/60 mb-2">Incharges: Ayisha Farvin Abdul Malik, Yukesh S</div>
      <div className="text-white/60 mb-2">Prerequisites: Medical students</div>
<div className="flex justify-center mt-4">
        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
          onClick={() => navigate("/register?event=DisasterX")}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default DisasterX;
