import React from "react";

const Anastamos = () => (
  <div className="min-h-screen pt-8 pb-24 px-6">
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4">ANASTAMOS • Basic Suturing Skills</h2>
<p className="text-lg text-white/80 mb-2">
  Suturing techniques, hand knotting, and operation theatre etiquette. Personal suturing kit provided.
</p>
<ul className="text-white/70 mb-4 list-disc pl-6">
  <li>Universal precaution</li>
  <li>Operation theatre etiquette</li>
  <li>Patient preparation</li>
  <li>Hand scrubbing</li>
  <li>Gowning and gloving techniques</li>
  <li>Basic suturing skills</li>
  <li>Suturing</li>
  <li>Hand knotting techniques</li>
</ul>
    <div className="flex gap-4 mb-4">
      <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
        📅 10/10/25
      </div>
      <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
        ⏰ Forenoon
      </div>
    </div>
<div className="text-white/60 mb-2">Duration: 4 hours (Forenoon session)</div>
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

export default function AnastamosPage() {
  return (
    <>
      <Anastamos />
      <RegisterNowButton />
    </>
  );
}

export { Anastamos };
