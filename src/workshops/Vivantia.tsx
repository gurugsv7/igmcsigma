import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkshopRegisterModal from "../WorkshopRegisterModal";

function Vivantia({ onRegister }: { onRegister: () => void }) {
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">VIVANTIA • Obstetric Workshop</h2>
      <p className="text-lg text-white/80 mb-2">
        Every birth is a story of strength, precision, and timely care. VIVANTIA equips you with essential intrapartum skills and lifesaving techniques, ensuring you step into obstetric practice with confidence and clarity. This workshop ensures practical insight, engaging learning, and confidence to excel in both academic and clinical practices.
      </p>
      <ul className="text-white/70 mb-4 list-disc pl-6">
        <li>Mechanism and conduct of labour (DOAP)</li>
        <li>LSCS</li>
        <li>Episiotomy suturing – hands on</li>
        <li>Postpartum hemorrhage management</li>
        <li>Pap smear and IUCD insertion</li>
        <li>Gynaecology examination</li>
        <li>Manual vacuum aspiration</li>
      </ul>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 09/10/2025 (Thursday)
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Afternoon (4 Hours)
        </div>
      </div>
      <div className="text-white/60 mb-2">Incharges: Sri Yogalakshmi R, Srinidhi Elodie Radjou</div>
      <div className="text-white/60 mb-2">Duration: 4 hours (Afternoon session)</div>
      <div className="text-white/60 mb-2">Prerequisites: Medical students</div>
      <div className="flex justify-center mt-4">
        <a
          href="/event-registration?event=Vivantia"
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}

export default Vivantia;
