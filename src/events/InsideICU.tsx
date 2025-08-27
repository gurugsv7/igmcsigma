import React from "react";
import { useNavigate } from "react-router-dom";

const InsideICU = () => {
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">Panel Discussion: Inside the ICU</h2>
      <p className="text-lg text-white/80 mb-2">What They Don’t Teach You in Undergrad Medicine</p>
      <p className="text-white/70 mb-4">
        The Intensive Care Unit is often seen as a space defined by machines, numbers, and silence. But behind every monitor is a storm of decision-making, emotion, and ethical complexity. This panel discussion brings to light the unseen side of critical care - from split-second life-or-death choices to the emotional toll carried by intensivists.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Finalized Subtopics:</span>
        <ul className="list-disc pl-6 text-white/70">
          <li>Real-World ICU Cases: Decisions Under Pressure</li>
          <li>End-of-Life Dilemmas: Who Decides When Enough is Enough?</li>
          <li>The Role of the Intensivist: More Than Just Machines</li>
          <li>ICU Protocols vs Individual Judgement: Walking the Grey Line</li>
          <li>Emotional Toll on Healthcare Providers: The Weight We Carry</li>
          <li>The ICU as a Young Doctor: The Shock of Seeing Death for the First Time</li>
        </ul>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Incharges:</span>
        <span className="text-white/80">Vengataramanan Tirou, Sravanti M</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prerequisites:</span>
        <span className="text-white/80">Medical students</span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 11/10/2025
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Saturday afternoon
        </div>
      </div>
<div className="flex justify-center mt-2 mb-4">
        <div
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300"
          style={{ position: "relative", zIndex: 20, pointerEvents: "none", opacity: 0.85 }}
        >
          Included with Tier 2 Delegate Pass
        </div>
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

export default function InsideICUPage() {
  return (
    <>
      <InsideICU />
      <RegisterNowButton />
    </>
  );
}

export { InsideICU };

export const insideICUDetails = {
  title: "PANEL DISCUSSION: INSIDE THE ICU",
  description: "What They Don’t Teach You in Undergrad Medicine. The Intensive Care Unit is often seen as a space defined by machines, numbers, and silence. But behind every monitor is a storm of decision-making, emotion, and ethical complexity. This panel discussion brings to light the unseen side of critical care - from split-second life-or-death choices to the emotional toll carried by intensivists.",
  topic: undefined,
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Real-World ICU Cases: Decisions Under Pressure",
    "End-of-Life Dilemmas: Who Decides When Enough is Enough?",
    "The Role of the Intensivist: More Than Just Machines",
    "ICU Protocols vs Individual Judgement: Walking the Grey Line",
    "Emotional Toll on Healthcare Providers: The Weight We Carry",
    "The ICU as a Young Doctor: The Shock of Seeing Death for the First Time"
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: undefined,
    team: undefined,
    prize: undefined,
    fee: "Included with Tier 2 Delegate Pass"
  },
  incharge: "Vengataramanan Tirou, Sravanti M",
  prerequisites: "Medical students",
  date: "11/10/2025",
  time: "Saturday afternoon"
};
