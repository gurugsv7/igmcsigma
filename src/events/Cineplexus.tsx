import React from "react";
import { useNavigate } from "react-router-dom";

const Cineplexus = () => {
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">Medical Short Film: Cineplexus</h2>
      <p className="text-lg text-white/80 mb-2">Theme: Youth Suicide Prevention, Hidden depression behind a smile, Substance Abuse Awareness</p>
      <p className="text-white/70 mb-4">
        Categories: Live Action, Documentary, Animation. Participants: Medical and Paramedical. Duration: 5-10 minutes. Ratio: 16:9. Language: Any (with English subtitles). One entry per team. Submission via Google Drive link. Deadline: 28th September 2025 (Sunday). Registration: Rs. 500. Date: 11/10/2025. Prizes Worth: Rs. 10,000.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Incharge:</span>
        <span className="text-white/80">Vijayshantini S</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prerequisites:</span>
        <span className="text-white/80">Medical and Paramedical students</span>
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
          onClick={() => navigate('/register?event=Cineplexus')}
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

export default function CineplexusPage() {
  return (
    <>
      <Cineplexus />
      <RegisterNowButton />
    </>
  );
}

export { Cineplexus };
