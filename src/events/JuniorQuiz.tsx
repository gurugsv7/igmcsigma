import React from "react";
import { useNavigate } from "react-router-dom";

const JuniorQuiz = () => {
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
      <h2 className="text-3xl font-bold text-center text-cyan-300 mb-4">Junior Quiz</h2>
      <p className="text-lg text-white/80 mb-2">STRIATUM SCHOLAR TROPHY</p>
      <p className="text-white/70 mb-4">
        Enter the arena where your fundamental skills serve as your most valuable assets! Are you prepared to decipher the intricacies of clinical knowledge? Strengthen your cognitive abilities and prepare for an exhilarating quiz competition.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Topic:</span>
        <span className="text-white/80">Anatomy and Pathology</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Rules and Regulations:</span>
        <ul className="list-disc pl-6 text-white/70">
          <li>Maximum 3 members per team</li>
          <li>Eligibility: MBBS Students from 1st Year to 3rd year are eligible (Only one 3rd year from the batch of 2022 per team)</li>
          <li>Cross college teams are allowed</li>
          <li>On spot registrations allowed</li>
          <li>Prelims: 9:00 AM to 10:00 AM [12th October 2025]</li>
          <li>Finals: 2:00 PM to 5:30 PM [12th October 2025]</li>
          <li>No limitations on number of teams per college</li>
          <li>Top 6 teams will qualify for Finals</li>
          <li>Quizmaster’s decision will be final!</li>
        </ul>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Registration:</span>
        <span className="text-white/80">Rs. 600/ Team</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prize Worth:</span>
        <span className="text-white/80">Rs. 30,000</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Incharge:</span>
        <span className="text-white/80">Boojasri R V</span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 12/10/25
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Sunday
        </div>
      </div>
      <div className="flex justify-center mt-2 mb-4">
        <a
          href="/register?event=JuniorQuiz"
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

export default function JuniorQuizPage() {
  return (
    <>
      <JuniorQuiz />
      <RegisterNowButton />
    </>
  );
}

export { JuniorQuiz };
