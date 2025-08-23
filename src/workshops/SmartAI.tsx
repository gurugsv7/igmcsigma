import React from "react";

const SmartAI = () => (
  <div className="min-h-screen pt-8 pb-24 px-6">
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4">SMART • AI for Research</h2>
<p className="text-lg text-white/80 mb-2">
  AI tools for research proposal writing, literature review, data analysis, and academic writing.
</p>
<ul className="text-white/70 mb-4 list-disc pl-6">
  <li>Prompt engineering in protocol writing</li>
  <li>Brainstorming research questions & objectives</li>
  <li>Turbocharging literature review</li>
  <li>Crafting robust methodology</li>
  <li>Creating questionnaires, proformas, consent forms</li>
  <li>Data analysis & visualization</li>
  <li>Review and discussion writing</li>
  <li>Writing references from scratch</li>
  <li>AI content detection & management</li>
</ul>
    <div className="flex gap-4 mb-4">
      <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
        📅 10/10/25
      </div>
      <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
        ⏰ Evening
      </div>
    </div>
<div className="text-white/60 mb-2">Duration: 8:00 AM to 4:00 PM (Full day session)</div>
<div className="text-white/60 mb-2">Prerequisites: Medical students</div>
<div className="text-white/60 mb-2">Capacity: N/A</div>
  </div>
);

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

export default function SmartAIPage() {
  return (
    <>
      <SmartAI />
      <RegisterNowButton />
    </>
  );
}

export { SmartAI };
