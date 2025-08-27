import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkshopRegisterModal from "../WorkshopRegisterModal";

export const occulexDetails = {
  title: "OCCULEX • Ophthalmology Workshop",
  description: "Experience-based skill-building: visual/pupillary pathways/reflexes, cataract surgeries, A-scan/keratometry, B-scan/UBM, hands-on ophthalmoscopy, retinoscopy, foreign body removal, injections, duct syringing, corneal button removal for transplantation.",
  topic: undefined,
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Visual and Pupillary pathways and reflexes (Theory and demonstration)",
    "Cataract surgeries – Video demonstration",
    "A Scan and Keratometry (Theory and demonstration)",
    "B scan and UBM (Theory and demonstration)",
    "Direct and indirect ophthalmoscopy (Demonstration and Hands on)",
    "Retinoscopy (Theory and Demonstration)",
    "Conjunctival and corneal foreign body removal (Demonstration)",
    "Sub-conjunctival, peri-bulbar and Retrobulbar injections – Demonstrations and Hands on (Subjected to availability of patients)",
    "Syringing of the nasolacrimal duct (Anatomy, Demonstration and theory)",
    "Corneo-scleral button removal for Corneal transplantation (Demonstration)"
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: undefined,
    team: undefined,
    prize: undefined,
    fee: "₹500"
  },
  incharge: "Swadhi T, Cindhujaa",
  prerequisites: "Medical students",
  date: "11/10/2025 (Saturday)",
  time: "Forenoon (4 Hours)"
};

export default function OcculexPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const workshopDetails = {
    name: "OCCULEX • Ophthalmology Workshop",
    price: "₹500",
    date: "11/10/2025 (Saturday)",
    time: "Forenoon (4 Hours)",
    incharges: "Swadhi T, Cindhujaa",
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">OCCULEX • Ophthalmology Workshop</h2>
        <p className="text-lg text-white/80 mb-2">
          Experience-based skill-building: visual/pupillary pathways/reflexes, cataract surgeries, A-scan/keratometry, B-scan/UBM, hands-on ophthalmoscopy, retinoscopy, foreign body removal, injections, duct syringing, corneal button removal for transplantation.
        </p>
        <div className="mb-2">
          <strong>Skills covered:</strong>
          <ul className="text-white/80 list-disc pl-6 mt-1">
            <li>Visual and Pupillary pathways and reflexes</li>
            <li>Cataract surgeries</li>
            <li>A Scan and Keratometry</li>
            <li>B scan and UBM</li>
            <li>Direct and indirect ophthalmoscopy – Hands-on</li>
            <li>Retinoscopy</li>
            <li>Conjunctival and corneal foreign body removal (Subject to availability of patients)</li>
            <li>Sub-conjunctival, peri-bulbar and retrobulbar injections</li>
            <li>Syringing of the nasolacrimal duct</li>
            <li>Corneo-scleral button removal for corneal transplantation</li>
          </ul>
        </div>
        <ul className="text-white/70 mb-4 list-disc pl-6">
          <li>Visual and Pupillary pathways and reflexes (Theory and demonstration)</li>
          <li>Cataract surgeries – Video demonstration</li>
          <li>A Scan and Keratometry (Theory and demonstration)</li>
          <li>B scan and UBM (Theory and demonstration)</li>
          <li>Direct and indirect ophthalmoscopy (Demonstration and Hands on)</li>
          <li>Retinoscopy (Theory and Demonstration)</li>
          <li>Conjunctival and corneal foreign body removal (Demonstration)</li>
          <li>Sub-conjunctival, peri-bulbar and Retrobulbar injections – Demonstrations and Hands on (Subjected to availability of patients)</li>
          <li>Syringing of the nasolacrimal duct (Anatomy, Demonstration and theory)</li>
          <li>Corneo-scleral button removal for Corneal transplantation (Demonstration)</li>
        </ul>
        <div className="flex gap-4 mb-4">
          <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
            📅 11/10/2025 (Saturday)
          </div>
          <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
            ⏰ Forenoon (4 Hours)
          </div>
        </div>
        <div className="text-white/60 mb-2">Incharges: Swadhi T, Cindhujaa</div>
        <div className="text-white/60 mb-2">Duration: 4 hours (Forenoon session)</div>
        <div className="text-white/60 mb-2">Prerequisites: Medical students</div>
<div className="flex flex-col items-center mt-2 gap-3">
  <button
    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300"
    onClick={() => navigate("/register?event=Occulex")}
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
