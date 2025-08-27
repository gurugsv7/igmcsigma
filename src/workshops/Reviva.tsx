import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkshopRegisterModal from "../WorkshopRegisterModal";

export const revivaDetails = {
  title: "REVIVA • Neonatology Resuscitation Practices",
  description: "Birth preparation, newborn care, resuscitation steps, ventilation (brief/prolonged), tube intubation, chest compressions.",
  topic: undefined,
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Neonatal resuscitation protocols",
    "Airway management and ventilation",
    "Chest compressions and medication",
    "Simulation-based scenarios",
    "Teamwork and communication"
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: undefined,
    team: undefined,
    prize: undefined,
    fee: "₹500"
  },
  incharge: "Jaganathan R, Karthik Raj Yuvaraj",
  prerequisites: "Medical students",
  date: "10/10/2025 (Friday)",
  time: "8:00 AM to 4:00 PM (Full day session)"
};

export default function RevivaPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const workshopDetails = {
    name: "REVIVA • Neonatology Resuscitation Practices",
    price: "₹500",
    date: "10/10/2025 (Friday)",
    time: "8:00 AM to 4:00 PM (Full day session)",
    incharges: "Jaganathan R, Karthik Raj Yuvaraj",
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">REVIVA • Neonatology Resuscitation Practices</h2>
        <p className="text-lg text-white/80 mb-2">
          Birth preparation, newborn care, resuscitation steps, ventilation (brief/prolonged), tube intubation, chest compressions.
        </p>
        <div className="mb-2">
          <strong>Skills covered:</strong>
          <ul className="text-white/80 list-disc pl-6 mt-1">
            <li>Birth preparation and routine newborn care</li>
            <li>Initial steps of resuscitation</li>
            <li>Ventilation: brief and prolonged (positive pressure resuscitation)</li>
            <li>Endotracheal tube intubation</li>
            <li>Chest compressions</li>
          </ul>
        </div>
        <div className="flex gap-4 mb-4">
          <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
            📅 10/10/2025 (Friday)
          </div>
          <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
            ⏰ 8:00 AM to 4:00 PM (Full day session)
          </div>
        </div>
        <div className="text-white/60 mb-2">Incharges: Jaganathan R, Karthik Raj Yuvaraj</div>
        <div className="text-white/60 mb-2">Prerequisites: Medical students</div>

        <div className="flex justify-center mt-4">
<button
            onClick={() => navigate("/register?event=Reviva")}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
          >
            Register Now
          </button>
        </div>
      </div>
    </>
  );
}
