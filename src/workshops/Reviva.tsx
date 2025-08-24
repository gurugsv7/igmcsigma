import React from "react";

import { useNavigate } from "react-router-dom";
function Reviva() {
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
      <h2 className="text-3xl font-bold text-center text-cyan-300 mb-4">REVIVA • Neonatology Resuscitation Practices</h2>
      <p className="text-lg text-white/80 mb-2">
        The first breath of life sometimes needs a guiding hand. REVIVA empowers you with the skills to respond when seconds matter most, ensuring every newborn is given the chance to thrive. This workshop ensures practical insight, engaging learning, and confidence to excel in both academic and clinical practices.
      </p>
      <ul className="text-white/70 mb-4 list-disc pl-6">
        <li>Basic NRP</li>
        <li>Routine care of newborn and preparation of birth</li>
        <li>Initial steps of care</li>
        <li>Brief ventilation</li>
        <li>Chest compressions (cardiac arrest) and prolonged ventilation – positive pressure resuscitation</li>
        <li>Endotracheal tube intubation</li>
      </ul>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 10/10/2025 (Friday)
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Afternoon (4 Hours)
        </div>
      </div>
      <div className="text-white/60 mb-2">Incharges: Jaganathan R, Karthik Raj Yuvaraj</div>
      <div className="text-white/60 mb-2">Duration: 4 hours (Afternoon session)</div>
      <div className="text-white/60 mb-2">Prerequisites: Medical students</div>
    </div>
  );
}

const RegisterNowButton = () => (
  <div className="flex justify-center mt-8">
    <a
      href="/delegate-pass"
      className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
    >
      Register Now
    </a>
  </div>
);

export default function RevivaPage() {
  return (
    <>
      <Reviva />
      <RegisterNowButton />
    </>
  );
}

export { Reviva };
