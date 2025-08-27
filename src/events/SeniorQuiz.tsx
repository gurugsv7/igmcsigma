import React from "react";
import { useNavigate } from "react-router-dom";

const SeniorQuiz = () => {
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">Senior Quiz: Striatum Scholar Trophy</h2>
      <div className="mb-2">
        <span className="block text-cyan-300 font-bold text-xl bg-cyan-900/30 rounded px-3 py-2 shadow">
          Topic: Gastroenterology
        </span>
      </div>
      <p className="text-white/70 mb-4">
        Maximum of 3 Members per team. Eligibility: MBBS Students from 1st Year to CRRI are eligible (Only one CRRI from the 2020 Batch per team). Cross college teams are allowed. On spot registrations allowed. Prelims: 9:00 AM to 10:00 AM [12th October 2025]. Finals: 2:00 PM to 5:30 PM [12th October 2025]. No limitations on number of teams per college. Top 6 Teams will qualify for the Finals. Quizmaster’s decision will be final.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Registration:</span>
        <span className="text-white/80">Rs. 600/Team (No delegate fee)</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prize Worth:</span>
        <span className="text-white/80">Rs. 40,000</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Incharge:</span>
        <span className="text-white/80">Sudharshan S</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prerequisites:</span>
        <span className="text-white/80">MBBS students 1st year to CRRI</span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 12/10/2025
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Prelims: 9:00 AM, Finals: 2:00 PM
        </div>
      </div>
<div className="flex justify-center mt-2 mb-4">
        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
          style={{ position: "relative", zIndex: 20 }}
          onClick={() => navigate('/register?event=SeniorQuiz')}
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

export default function SeniorQuizPage() {
  return (
    <>
      <SeniorQuiz />
      <RegisterNowButton />
    </>
  );
}

export { SeniorQuiz };

export const seniorQuizDetails = {
  title: "SENIOR QUIZ - STRIATUM SCHOLAR TROPHY",
  description: "Part of STRIATUM 3.0 - SNYAPSE: Connecting knowledge, Sparking Innovation",
  topic: "GASTROENTEROLOGY",
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Maximum of 3 Members per team",
    "Eligibility: MBBS Students from 1st Year to CRMI are eligible (Only one CRMI from the 2020 Batch per team)",
    "Cross college teams are allowed",
    "On spot registrations allowed",
    "Event on Sunday, 12th October 2025",
    "Prelims: 9:00 AM to 10:00 AM",
    "Finals: 2:00 PM to 5:30 PM",
    "No limitations on number of teams per college",
    "Top 6 Teams will qualify for the Finals",
    "Quizmaster's decision will be final"
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: undefined,
    team: "Rs. 600/Team (No delegate fee)",
    prize: "Rs. 40,000",
    fee: undefined
  },
  incharge: "Sudharshan S",
  prerequisites: "MBBS students 1st year to CRRI",
  date: "12/10/2025",
  time: "Prelims: 9:00 AM, Finals: 2:00 PM"
};
