import React from "react";
import { useNavigate } from "react-router-dom";

const RoadToResidency = () => {
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">The Road to Residency: USMLE, UKMLE, MRCP, MRCS</h2>
      <p className="text-lg text-white/80 mb-2">Career guidance for international medical examinations</p>
      <p className="text-white/70 mb-4">
        Comprehensive guidance on international medical career pathways and exam strategies.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Introduction:</span>
        <span className="text-white/80">
          Securing a medical residency abroad is a multifaceted journey involving exams, strategic planning, and adapting to new healthcare systems. This panel pulls back the curtain on each pathway—USMLE, UKMLE, MRCP, MRCS—offering real-world insight, personal reflection, and practical advice for undergraduates envisioning an international career. From navigating exam hurdles to facing professional and personal adaptation, the discussion aims to prepare attendees for the road ahead.
        </span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Finalized Subtopics:</span>
        <ul className="list-disc pl-6 text-white/70">
          <li>USMLE Unplugged: Cracking the Code to U.S. Residency</li>
          <li>PLAB Pathway: The Simplified Route to Practicing in the UK</li>
          <li>MRCP: The Physician’s Track to the NHS</li>
          <li>MRCS: For the Scalpel Driven Minds</li>
          <li>Common Dilemmas & Decision Points</li>
          <li>The Emotional and Academic Reality</li>
        </ul>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 11/10/25
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Afternoon
        </div>
      </div>
      <div className="flex justify-center mt-2 mb-4">
        <a
          href="/delegate-pass"
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

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

export default function RoadToResidencyPage() {
  return (
    <>
      <RoadToResidency />
      <RegisterNowButton />
    </>
  );
}

export { RoadToResidency };
