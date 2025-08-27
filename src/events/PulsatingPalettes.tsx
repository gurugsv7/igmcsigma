import React from "react";
import { useNavigate } from "react-router-dom";

const PulsatingPalettes = () => {
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">Body Painting: Pulsating Palettes</h2>
      <p className="text-lg text-white/80 mb-2">Theme: Anatomy</p>
      <p className="text-white/70 mb-4">
        A team of 3 students can participate including the model. Body painting (any region) – GROSS ANATOMY. Participants should explain the painting to the judges during evaluation, creative innovative ideas gain extra points. Participants should bring the required materials and stationaries. Judge’s Decision will be FINAL.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Registration:</span>
        <span className="text-white/80">Rs. 150/ Team</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Date:</span>
        <span className="text-white/80">11/10/2025</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prizes Worth:</span>
        <span className="text-white/80">Rs. 1500</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Incharge:</span>
        <span className="text-white/80">Vishwesh R</span>
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
          ⏰ Saturday morning
        </div>
      </div>
<div className="flex justify-center mt-2 mb-4">
        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
          style={{ position: "relative", zIndex: 20 }}
          onClick={() => navigate('/register?event=PulsatingPalettes')}
        >
          Register Now
        </button>
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

export default function PulsatingPalettesPage() {
  return (
    <>
      <PulsatingPalettes />
      <RegisterNowButton />
    </>
  );
}

export { PulsatingPalettes };

export const pulsatingPalettesDetails = {
  title: "BODY PAINTING: PULSATING PALETTES",
  description: "A team of 3 students can participate including the model. Body painting (any region) – GROSS ANATOMY. Participants should explain the painting to the judges during evaluation, creative innovative ideas gain extra points. Participants should bring the required materials and stationaries. Judge’s Decision will be FINAL.",
  topic: undefined,
  theme: "Anatomy",
  themes: undefined,
  categories: undefined,
  rules: [
    "A team of 3 students can participate including the model",
    "Body painting (Any region) – GROSS ANATOMY",
    "Participants should explain the painting to the judges during evaluation",
    "Creative innovative ideas gain extra points",
    "Participants should bring the required materials and stationaries",
    "Judge's Decision will be FINAL",
    "Event on Saturday morning, 11th October 2025"
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: undefined,
    team: "Rs. 150/Team",
    prize: "Rs. 1500",
    fee: undefined
  },
  incharge: "Vishwesh R",
  prerequisites: "Medical students",
  date: "11/10/2025",
  time: "Saturday morning"
};
