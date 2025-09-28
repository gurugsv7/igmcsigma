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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-2 mt-12">Online Quiz</h2>
<h3 className="text-xl font-semibold text-center text-purple-300 mb-4">Pancrithon</h3>
      <div className="mb-2">
        <span className="block text-cyan-300 font-bold text-xl bg-cyan-900/30 rounded px-3 py-2 shadow">
          Topic: Diabetes
        </span>
      </div>
      <p className="text-white/70 mb-4">
        Maximum 3 members per team. Eligibility: MBBS Students from 1st Year to CRRI are eligible (Only one CRRI from the 2020 Batch per team). NO cross college teams are allowed. Quiz consists of 3 rounds. Preliminary round will be conducted ONLINE on 28/09/2025 [4.00pm to 4.45pm]. Preliminary round will consist of 45 questions, with a duration of 45 minutes. Link will be sent on the day of Quiz. During the preliminary round, camera should be ON always. Any malpractice identified will lead to disqualification. Top 12 teams from the preliminary round will be qualified for the semifinals. Semifinals will be conducted offline on 12/10/2025. Top 6 teams from semifinals will be qualified for Finals. Finals will be conducted offline on 12/10/2025.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Registration:</span>
        <span className="text-white/80">Rs. 300/ team</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prizes Worth:</span>
        <span className="text-white/80">Rs. 20,000</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Incharge:</span>
        <span className="text-white/80">Arivanban S</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prerequisites:</span>
        <span className="text-white/80">MBBS students 1st year to CRRI</span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 28/09/2025 (Online Prelims), 12/10/2025 (Semis & Finals)
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Prelims: 4:00 PM, Semis/Finals: Sunday
        </div>
      </div>
<div className="flex flex-col items-center mt-2 mb-4">
<div className="font-bold text-cyan-300 mb-2">Inclusive of lunch</div>
        <div
          className="bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform shadow-xl shadow-gray-400/25 flex items-center justify-center"
          style={{ position: "relative", zIndex: 20 }}
        >
          Registration Closed
        </div>
      </div>
    </div>
  );
};

const RegisterNowButton = () => (
  <div className="flex flex-col items-center mt-8">
    <div className="font-bold text-green-300 mb-2">Inclusive of lunch</div>
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
    </>
  );
}

export { OnlineQuiz };

export const onlineQuizDetails = {
  title: "Pancrithon",
  description: "Maximum 3 members per team. Eligibility: MBBS Students from 1st Year to CRRI are eligible (Only one CRRI from the 2020 Batch per team). NO cross college teams are allowed. Quiz consists of 3 rounds. Preliminary round will be conducted ONLINE on 28/09/2025 [4.00pm to 4.45pm]. Preliminary round will consist of 45 questions, with a duration of 45 minutes. Link will be sent on the day of Quiz. During the preliminary round, camera should be ON always. Any malpractice identified will lead to disqualification. Top 12 teams from the preliminary round will be qualified for the semifinals. Semifinals will be conducted offline on 12/10/2025. Top 6 teams from semifinals will be qualified for Finals. Finals will be conducted offline on 12/10/2025.",
  topic: "Diabetes",
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Maximum 3 members per team",
    "Eligibility: MBBS Students from 1st Year to CRRI are eligible (Only one CRRI from the 2020 Batch per team)",
    "NO cross college teams are allowed",
    "Quiz consists of 3 rounds",
    "Preliminary round will be conducted ONLINE on 28/09/2025 [4.00pm to 4.45pm]",
    "Preliminary round will consist of 45 questions, with a duration of 45 minutes",
    "Link will be sent on the day of Quiz",
    "During the preliminary round, camera should be ON always",
    "Any malpractice identified will lead to disqualification",
    "Top 12 teams from the preliminary round will be qualified for the semifinals",
    "Semifinals will be conducted offline on 12/10/2025",
    "Top 6 teams from semifinals will be qualified for Finals",
    "Finals will be conducted offline on 12/10/2025"
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: undefined,
    team: "Rs. 300/team",
    prize: "Rs. 20,000",
    fee: undefined
  },
  incharge: "Arivanban S",
  prerequisites: "MBBS students 1st year to CRRI",
  date: "28/09/2025 (Online Prelims), 12/10/2025 (Semis & Finals)",
  time: "Prelims: 4:00 PM, Semis/Finals: Sunday"
};
