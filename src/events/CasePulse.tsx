import React from "react";
import { useNavigate } from "react-router-dom";

const CasePulse = () => {
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">Case Presentation: Case Pulse</h2>
      <p className="text-lg text-white/80 mb-2">Present interesting clinical cases</p>
      <p className="text-white/70 mb-4">
        Platform for presenting unique and challenging clinical cases with expert feedback.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Eligibility:</span>
        <span className="text-white/80">MBBS Students and CRRIs (Interns)</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Rules:</span>
        <ul className="list-disc pl-6 text-white/70">
          <li>Each team can have a maximum of 2 members. Individual presentations also accepted.</li>
          <li>Cases from Medicine, Surgery, OBGY, or Paediatrics are permitted.</li>
          <li>Only one delegate in the team is allowed to present the case. Questions can be answered by either member.</li>
        </ul>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Case Submission Guidelines:</span>
        <ul className="list-disc pl-6 text-white/70">
          <li>The case must be original and drawn from one of the teaching hospitals affiliated with the delegate’s institution. Appropriate follow up must be documented.</li>
          <li>An official Letter of Attestation must accompany the abstract.</li>
          <li>Abstracts should not exceed 500 words. Format: Times New Roman, Size 12, Line Spacing 1.5.</li>
          <li>Last date for submission: 24th September, 2025.</li>
          <li>Abstracts should be in Word document (.doc or .docx) format and sent to striatum.3.igmcri@gmail.com.</li>
          <li>Rename the file as Name_Subject_Casepulse.</li>
          <li>Selected delegates will be informed by email.</li>
          <li>Presentation must be in PowerPoint (.ppt or .pptx) and submitted by 5th October 2025.</li>
          <li>One winner per session, declared in the valedictory ceremony.</li>
        </ul>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Registration:</span>
        <span className="text-white/80">Rs. 300 (Single member), Rs. 400 (Team of 2 members)</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prize Worth:</span>
        <span className="text-white/80">Rs. 3000</span>
      </div>
      <div className="mb-4">
<span className="block text-cyan-300 font-semibold">Incharge:</span>
        <span className="text-white/80">Suyashri</span>
      </div>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Prerequisites:</span>
        <span className="text-white/80">MBBS students and CRRIs</span>
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
    onClick={() => navigate('/register?event=CasePulse')}
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

export default function CasePulsePage() {
  return (
    <>
      <CasePulse />
    </>
  );
}

export { CasePulse };

export const casePulseDetails = {
  title: "CASE PRESENTATION (CASE PULSE)",
  description: "Part of STRIATUM 3.0 - SNYAPSE: Connecting knowledge, Sparking Innovation",
  topic: undefined,
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Each team can have a maximum of 2 members",
    "Individual presentations will also be accepted",
    "Cases should be from Medicine, Surgery, OBGY and Paediatrics",
    "Only one delegate in the team is allowed to present the case. However questions can be answered by either of the team members",
    "The case presented should be original and must be from any of the teaching hospitals affiliated to the delegate's college and must be followed up"
  ],
  abstract: [
    "Abstracts should not exceed 500 words",
    "The last date for the submission of abstracts is 24th September, 2025",
    "The abstracts should be in the form of a word document (.doc or .docx)",
    "The abstracts should be in the format of- Identification, data of the patient, presenting complaints, history, examination findings, investigations, differential diagnosis, treatment, follow up and references",
    "Abstracts should be sent to striatum.3.igmcri@gmail.com",
    "Rename the file as Name_Subject_Casepulse"
  ],
  presentation: [
    "The presentation is expected to be in the form of a Power point presentation (.ppt or .pptx)",
    "The power point presentation is to be submitted at the latest by 5th October 2025",
    "Presentation on Sunday morning, 12th October 2025"
  ],
  registration: {
    single: "Rs. 300",
    team: "Rs. 400 (A team of 2 members)",
    prize: "Rs. 3000",
    fee: undefined
  },
  incharge: "Suyashri",
  prerequisites: undefined,
  date: undefined,
  time: undefined
};
