import React from "react";
import { useNavigate } from "react-router-dom";

const OnlineQuiz = () => {
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
      <h2 className="text-3xl font-bold text-center text-cyan-300 mb-4">Online Quiz</h2>
      <p className="text-lg text-white/80 mb-2">STRIATUM SCHOLAR TROPHY</p>
      <p className="text-white/70 mb-4">
        Three-round quiz on Diabetes with online prelims, offline semifinals and finals.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Topic:</span>
        <span className="text-white/80">Diabetes</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Rules and Regulations:</span>
        <ul className="list-disc pl-6 text-white/70">
          <li>Maximum 3 members per team</li>
          <li>Eligibility: MBBS Students from 1st Year to CRRI are eligible (Only one CRRI from the 2020 Batch per team)</li>
          <li>No cross college teams are allowed</li>
          <li>Quiz consists of 3 rounds</li>
          <li>Preliminary round will be conducted ONLINE on 28/09/2025 [4.00pm to 4.45pm]</li>
          <li>Preliminary round will consist of 45 questions, with a duration of 45 minutes</li>
          <li>Link will be sent on the day of Quiz</li>
          <li>During the preliminary round, camera should be ON always</li>
          <li>Any malpractice identified will lead to disqualification</li>
          <li>Top 12 teams from the preliminary round will be qualified for the semifinals</li>
          <li>Semifinals will be conducted offline on 12/10/2025</li>
          <li>Top 6 teams from semifinals will be qualified for Finals</li>
          <li>Finals will be conducted offline on 12/10/2025</li>
        </ul>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Registration:</span>
        <span className="text-white/80">Rs. 300/ team</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prize Worth:</span>
        <span className="text-white/80">Rs. 20,000</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Incharge:</span>
        <span className="text-white/80">Arivanban S</span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 Prelims: 28/09/25
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Semifinals & Finals: 12/10/25
        </div>
      </div>
      <div className="flex justify-center mt-2 mb-4">
        <a
          href="/register?event=OnlineQuiz"
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

export default function OnlineQuizPage() {
  return (
    <>
      <OnlineQuiz />
      <RegisterNowButton />
    </>
  );
}

export { OnlineQuiz };
