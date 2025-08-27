import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkshopRegisterModal from "../WorkshopRegisterModal";

export const smartAIDetails = {
  title: "SMART • AI for Research",
  description: "Covers prompt engineering, protocol writing, brainstorming, turbo literature review, robust methodology, questionnaires/proformas/consent, data analysis/visualization, review/discussion writing, references, and AI content management/detection.",
  topic: undefined,
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "<strong>Application of AI in:</strong>",
    "Prompt engineering in protocol writing",
    "Brainstorming research questions & objectives",
    "Turbocharging literature review",
    "Crafting impactful, robust methodology",
    "Creating ready-to-print questionnaires, proformas and consent forms",
    "Conducting seamless data analysis & data visualisation",
    "Simplying review and discussion writing",
    "Writing references from scratch",
    "AI content detection & management"
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: undefined,
    team: undefined,
    prize: undefined,
    fee: "₹500"
  },
  incharge: "Hemalatha M, Gopinath S",
  prerequisites: "Medical students",
  date: "10/10/2025 (Friday)",
  time: "8:00 AM to 4:00 PM (Full day session)"
};

export default function SmartAIPage() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const workshopDetails = {
    name: "SMART • AI for Research",
    price: "₹500",
    date: "10/10/2025 (Friday)",
    time: "8:00 AM to 4:00 PM (Full day session)",
    incharges: "Hemalatha M, Gopinath S",
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">SMART • AI for Research</h2>
        <p className="text-lg text-white/80 mb-2">
          Covers prompt engineering, protocol writing, brainstorming, turbo literature review, robust methodology, questionnaires/proformas/consent, data analysis/visualization, review/discussion writing, references, and AI content management/detection.
        </p>
        <ul className="text-white/70 mb-4 list-disc pl-6">
          <li><strong>Application of AI in:</strong></li>
          <li>Prompt engineering in protocol writing</li>
          <li>Brainstorming research questions & objectives</li>
          <li>Turbocharging literature review</li>
          <li>Crafting impactful, robust methodology</li>
          <li>Creating ready-to-print questionnaires, proformas and consent forms</li>
          <li>Conducting seamless data analysis & data visualisation</li>
          <li>Simplying review and discussion writing</li>
          <li>Writing references from scratch</li>
          <li>AI content detection & management</li>
        </ul>
        <div className="flex gap-4 mb-4">
          <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
            📅 10/10/2025 (Friday)
          </div>
          <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
            ⏰ 8:00 AM to 4:00 PM (Full day session)
          </div>
        </div>
      <div className="text-white/60 mb-2">Incharges: Hemalatha M, Gopinath S</div>
      <div className="text-white/60 mb-2">Prerequisites: Medical students</div>

        <div className="flex flex-col items-center mt-4">
          <div className="font-bold text-cyan-300 mb-2">Inclusive of lunch</div>
          <button
            onClick={() => navigate("/register?event=SmartAI")}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
          >
            Register Now
          </button>
        </div>
      </div>
    </>
  );
}
