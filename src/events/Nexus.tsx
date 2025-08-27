import React from "react";
import { useNavigate } from "react-router-dom";

const Nexus = () => {
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">Paper Presentation: Nexus</h2>
      <p className="text-lg text-white/80 mb-2">Oral paper presentations</p>
      <p className="text-white/70 mb-4">
        Present your research papers and studies to a panel of experts and peers.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Rules:</span>
        <ul className="list-disc pl-6 text-white/70">
          <li>Teams should consist of a maximum of two members. Individual presenters also accepted.</li>
          <li>Only one delegate in the team is allowed to present the paper. Questions can be answered by either member.</li>
          <li>Abstracts (not more than 500 words) must be submitted by 24th September 2025 to striatum.3.igmcri@gmail.com in Word document (.doc or .docx) format. Rename the file as Name_Nexus.</li>
          <li>Abstract format: Title, Introduction, Background, Aims and Objectives, Materials and Methods, Results & analysis (as applicable), and References.</li>
          <li>Informed consent form, study questionnaire and case study form must be uploaded separately if used for the study.</li>
          <li>All abstracts will be screened by a committee of senior faculty members.</li>
          <li>Selected abstracts will be presented in the oral paper presentation.</li>
          <li>Presentation must be in PowerPoint (.ppt or .pptx) and submitted by 5th October 2025.</li>
          <li>Each presenter: 8 minutes (5 min presentation, 3 min Q&A).</li>
          <li>One winner per session, declared in the valedictory ceremony.</li>
        </ul>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Registration:</span>
        <span className="text-white/80">Rs. 300/ Single member, Rs. 400/ Team of 2 members</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prize Worth:</span>
        <span className="text-white/80">Rs. 3000</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Incharge:</span>
        <span className="text-white/80">Bhuwaneshwaran R</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prerequisites:</span>
        <span className="text-white/80">MBBS students</span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 12/10/25
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Sunday morning
        </div>
      </div>
<div className="flex flex-col items-center mt-2 mb-4 gap-3">
  <button
    className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300"
    style={{ position: "relative", zIndex: 20 }}
    onClick={() => navigate('/register?event=Nexus')}
  >
    Register Now
  </button>
  <button
    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
    onClick={() => navigate('/accommodation')}
  >
    Get Accommodation
  </button>
</div>
    </div>
  );
};

const RegisterNowButton = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center mt-8 gap-3">
      <a
        href="/delegate-pass"
        className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 text-center"
      >
        Register Now
      </a>
      <button
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
        onClick={() => navigate('/accommodation')}
      >
        Get Accommodation
      </button>
    </div>
  );
};

export default function NexusPage() {
  return (
    <>
      <Nexus />
      <RegisterNowButton />
    </>
  );
}

export { Nexus };

export const nexusDetails = {
  title: "PAPER PRESENTATION (NEXUS)",
  description: "Present your research papers and studies to a panel of experts and peers.",
  topic: undefined,
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Teams should consist of a maximum of two members. Individual presenters also accepted.",
    "Only one delegate in the team is allowed to present the paper. Questions can be answered by either member.",
    "Abstracts (not more than 500 words) must be submitted by 24th September 2025 to striatum.3.igmcri@gmail.com in Word document (.doc or .docx) format. Rename the file as Name_Nexus.",
    "Abstract format: Title, Introduction, Background, Aims and Objectives, Materials and Methods, Results & analysis (as applicable), and References.",
    "Informed consent form, study questionnaire and case study form must be uploaded separately if used for the study.",
    "All abstracts will be screened by a committee of senior faculty members.",
    "Selected abstracts will be presented in the oral paper presentation.",
    "Presentation must be in PowerPoint (.ppt or .pptx) and submitted by 5th October 2025.",
    "Each presenter: 8 minutes (5 min presentation, 3 min Q&A).",
    "One winner per session, declared in the valedictory ceremony."
  ],
  abstract: [
    "Abstracts (not more than 500 words) must be submitted by 24th September 2025 to striatum.3.igmcri@gmail.com in Word document (.doc or .docx) format. Rename the file as Name_Nexus.",
    "Abstract format: Title, Introduction, Background, Aims and Objectives, Materials and Methods, Results & analysis (as applicable), and References.",
    "Informed consent form, study questionnaire and case study form must be uploaded separately if used for the study.",
    "All abstracts will be screened by a committee of senior faculty members.",
    "Selected abstracts will be presented in the oral paper presentation."
  ],
  presentation: [
    "Presentation must be in PowerPoint (.ppt or .pptx) and submitted by 5th October 2025.",
    "Each presenter: 8 minutes (5 min presentation, 3 min Q&A)."
  ],
  registration: {
    single: "Rs. 300/ Single member",
    team: "Rs. 400/ Team of 2 members",
    prize: "Rs. 3000",
    fee: undefined
  },
  incharge: "Bhuwaneshwaran R",
  prerequisites: "MBBS students",
  date: "12/10/25",
  time: "Sunday morning"
};
