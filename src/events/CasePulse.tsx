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
        <span className="text-white/80">Gopinath S</span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
          📅 12/10/25
        </div>
        <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
          ⏰ Sunday morning
        </div>
      </div>
      <div className="flex justify-center mt-2 mb-4">
        <a
          href="/register?event=CasePulse"
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

export default function CasePulsePage() {
  return (
    <>
      <CasePulse />
      <RegisterNowButton />
    </>
  );
}

export { CasePulse };
