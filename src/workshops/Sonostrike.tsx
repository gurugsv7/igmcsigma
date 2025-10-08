import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkshopRegisterModal from "../WorkshopRegisterModal";

export const sonostrikeDetails = {
  title: "SONOSTRIKE • Radiology EFAST Workshop",
  description: "Master the art of bedside ultrasound with hands-on EFAST training. SONOSTRIKE is designed to equip you with the skills to rapidly assess trauma patients, identify life-threatening conditions, and make critical decisions in emergency settings.",
  topic: undefined,
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Introduction to EFAST protocol",
    "Hands-on ultrasound scanning",
    "Identifying free fluid and pneumothorax",
    "Trauma case simulations",
    "Interpretation of ultrasound images",
    "Clinical integration and decision making"
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: undefined,
    team: undefined,
    prize: undefined,
    fee: "₹600"
  },
  incharge: "Kartiyayini, Priyanga R",
  prerequisites: "Medical students",
  date: "09/10/2025 (Thursday)",
  time: "9:00 AM to 12:30 PM (Forenoon session)"
};

export default function SonostrikePage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const workshopDetails = {
    name: "SONOSTRIKE • Radiology EFAST Workshop",
    price: "₹600",
    date: "09/10/2025 (Thursday)",
    time: "9:00 AM to 12:30 PM (Forenoon session)",
    incharges: "Kartiyayini, Priyanga R",
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">SONOSTRIKE • Radiology EFAST Workshop</h2>
        <p className="text-lg text-white/80 mb-2">
          Master the art of bedside ultrasound with hands-on EFAST training. SONOSTRIKE is designed to equip you with the skills to rapidly assess trauma patients, identify life-threatening conditions, and make critical decisions in emergency settings.
        </p>
        <ul className="text-white/70 mb-4 list-disc pl-6">
          <li>Introduction to EFAST protocol</li>
          <li>Hands-on ultrasound scanning</li>
          <li>Identifying free fluid and pneumothorax</li>
          <li>Trauma case simulations</li>
          <li>Interpretation of ultrasound images</li>
          <li>Clinical integration and decision making</li>
        </ul>
        <div className="flex gap-4 mb-4">
          <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
            📅 09/10/2025 (Thursday)
          </div>
          <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
            ⏰ 9:00 AM to 12:30 PM (Forenoon session)
          </div>
        </div>
        <div className="text-white/60 mb-2">Incharges: Kartiyayini, Priyanga R</div>
        <div className="text-white/60 mb-2">Prerequisites: Medical students</div>

        <div className="flex flex-col items-center mt-4 gap-3">
  <button
    onClick={() => navigate("/register?event=Sonostrike")}
    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300"
  >
    Register Now
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
