import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkshopRegisterModal from "../WorkshopRegisterModal";

function ExodontiaX({ onRegister }: { onRegister: () => void }) {
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
      <h2 className="text-3xl font-bold text-center text-cyan-300 mb-4">EXODONTIA'X • Dental Workshop</h2>
      <p className="text-lg text-white/80 mb-2">
        In the clinic, emergencies can arrive unannounced. EXODONTIA ’X’ equips you to respond with composure and expertise, mastering protocols that safeguard patients and uphold the highest standards of dental care. This workshop ensures practical insight, engaging learning, and confidence to excel in both academic and clinical practice.
      </p>
      <ul className="text-white/70 mb-4 list-disc pl-6">
        <li>Identifying medical emergencies in dental settings</li>
        <li>Managing syncope, hypoglycemia and chest pain</li>
        <li>Using emergency drugs and clinical equipment</li>
        <li>Performing basic life support (BLS)</li>
        <li>Managing airway emergencies</li>
        <li>Handling emergency medication kits</li>
        <li>Responding to medical collapse during procedures</li>
        <li>Solving practical challenges in emergency scenarios</li>
        <li>Disaster preparedness</li>
      </ul>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 11/10/2025 (Saturday)
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Forenoon (4 Hours)
        </div>
      </div>
      <div className="text-white/60 mb-2">Incharges: Sushmitha S, Abhinaya N</div>
      <div className="text-white/60 mb-2">Prerequisites: Dental students</div>
      <div className="flex justify-center mt-4">
        <a
          href="/event-registration?event=ExodontiaX"
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}

export default ExodontiaX;
