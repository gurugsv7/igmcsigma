import React from "react";
import { useNavigate } from "react-router-dom";

export default function SonicShift() {
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">THE SONIC SHIFT • Basic Anaesthesiology Workshop</h2>
      <div className="text-center text-cyan-200 font-semibold mb-2">TAGLINE: Real Time answers at Bedside – mastering POCUS</div>
      <p className="text-lg text-white/80 mb-2">
        Point-of-care ultrasound has transformed Anaesthesia, Critical Care, and Pain Management. From fetal interventions to elderly trauma care, real-time bedside imaging simplifies complexities, ensures precision, and improves safety. Join our hands-on workshop to explore this vital skill in patient care.
      </p>
      <ul className="text-white/70 mb-4 list-disc pl-6">
        <li>Introduction sonography and its applications in critical care and pain management</li>
        <li>Approach to a patient with desaturation/breathlessness</li>
        <li>Approach to a patient with blunt trauma</li>
        <li>Approach to a patient with hypotension</li>
        <li>Visualization of neurovascular bundles</li>
        <li>Approach to a patient with difficult intravenous access</li>
      </ul>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 09/10/2025 (Thursday)
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ 8:00 AM to 4:00 PM
        </div>
      </div>
      <div className="text-white/60 mb-2">Incharges: Swathy Meena S G, Sri Meenakshi T</div>
      <div className="text-white/60 mb-2">Prerequisites: Medical students</div>
<div className="flex justify-center mt-4">
        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
          onClick={() => navigate("/register?event=SonicShift")}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
