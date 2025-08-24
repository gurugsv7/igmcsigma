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
      <h2 className="text-3xl font-bold text-center text-cyan-300 mb-4">Body Painting: Pulsating Palettes</h2>
      <p className="text-lg text-white/80 mb-2">Anatomy oriented body painting competition</p>
      <p className="text-white/70 mb-4">
        Creative artistic representation of anatomical concepts through body painting.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Theme:</span>
        <span className="text-white/80">Anatomy</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Rules:</span>
        <ul className="list-disc pl-6 text-white/70">
          <li>A team of 3 students can participate including the model</li>
          <li>Body painting (Any region) – GROSS ANATOMY</li>
          <li>Participants should explain the painting to the judges during evaluation, creative innovative ideas gain extra points</li>
          <li>Participants should bring the required materials and stationaries</li>
          <li>Judge’s Decision will be FINAL</li>
        </ul>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Registration:</span>
        <span className="text-white/80">Rs. 150/ Team</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prize Worth:</span>
        <span className="text-white/80">Rs. 1500</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Incharge:</span>
        <span className="text-white/80">Vishwesh R</span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 11/10/25
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Saturday morning
        </div>
      </div>
      <div className="flex justify-center mt-2 mb-4">
        <a
          href="/register?event=PulsatingPalettes"
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
          style={{ position: "relative", zIndex: 20 }}
          onClick={e => {
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
              document.body.style.overflow = '';
            }, 1000);
          }}
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

export default function PulsatingPalettesPage() {
  return (
    <>
      <PulsatingPalettes />
      <RegisterNowButton />
    </>
  );
}

export { PulsatingPalettes };
