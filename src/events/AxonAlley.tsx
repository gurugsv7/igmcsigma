import React from "react";
import { useNavigate } from "react-router-dom";

const AxonAlley = () => {
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
<h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">Poster Presentation: Axon Alley</h2>
      <p className="text-lg text-white/80 mb-2">Research poster presentations</p>
      <p className="text-white/70 mb-4">
        Showcase your research work through professional poster presentations.
      </p>
      <div className="mb-4">
        <span className="block text-cyan-300 font-semibold">Rules:</span>
        <ul className="list-disc pl-6 text-white/70">
          <li>Only digital posters in print are accepted.</li>
          <li>Poster size should not exceed 4ft x 3ft.</li>
          <li>Teams should consist of a maximum of 2 members.</li>
          <li>Only one delegate in the team is allowed to present the poster. Questions can be answered by any team member.</li>
          <li>Only e-posters in landscape orientation are accepted.</li>
          <li>E-posters should be sent to striatum.3.igmcri@gmail.com. Rename the file as Name_AxonAlley.</li>
          <li>Plagiarism of any type will lead to disqualification.</li>
          <li>All information must appear within one slide only.</li>
          <li>Resolution of the e-poster should be 1080×1920 pixels.</li>
          <li>Last day for submission of the e-poster: 1st October 2025.</li>
          <li>Selected teams have to present their posters on the day of event.</li>
          <li>Delegates will be allotted a time of 7 minutes in total: 4 minutes to explain their poster and 3 minutes for questions by jury.</li>
          <li>Prizes will be given for overall best poster presentation, best poster and best presenter.</li>
          <li>Winners will be declared in the valedictory ceremony only.</li>
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
        <span className="text-white/80">Thirumurugan S</span>
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
  <div
    className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center opacity-80"
    style={{ position: "relative", zIndex: 20, pointerEvents: "none" }}
  >
    Registration Closed
  </div>
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
      <div
        className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center opacity-80"
        style={{ position: "relative", zIndex: 20, pointerEvents: "none" }}
      >
        Registration Closed
      </div>
      <button
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
        onClick={() => navigate('/accommodation')}
      >
        Get Accommodation
      </button>
    </div>
  );
};

export default function AxonAlleyPage() {
  return (
    <>
      <AxonAlley />
    </>
  );
}

export { AxonAlley };

export const axonAlleyDetails = {
  title: "POSTER PRESENTATION (AXON ALLEY)",
  description: "Research poster presentations. Showcase your research work through professional poster presentations.",
  topic: undefined,
  theme: undefined,
  themes: undefined,
  categories: undefined,
  rules: [
    "Only digital posters in print are accepted.",
    "Poster size should not exceed 4ft x 3ft.",
    "Teams should consist of a maximum of 2 members.",
    "Only one delegate in the team is allowed to present the poster. Questions can be answered by any team member.",
    "Only e-posters in landscape orientation are accepted.",
    "E-posters should be sent to striatum.3.igmcri@gmail.com. Rename the file as Name_AxonAlley.",
    "Plagiarism of any type will lead to disqualification.",
    "All information must appear within one slide only.",
    "Resolution of the e-poster should be 1080×1920 pixels.",
    "Last day for submission of the e-poster: 1st October 2025.",
    "Selected teams have to present their posters on the day of event.",
    "Delegates will be allotted a time of 7 minutes in total: 4 minutes to explain their poster and 3 minutes for questions by jury.",
    "Prizes will be given for overall best poster presentation, best poster and best presenter.",
    "Winners will be declared in the valedictory ceremony only."
  ],
  abstract: undefined,
  presentation: undefined,
  registration: {
    single: "Rs. 300/ Single member",
    team: "Rs. 400/ Team of 2 members",
    prize: "Rs. 3000",
    fee: undefined
  },
  incharge: "Thirumurugan S",
  prerequisites: "MBBS students",
  date: "12/10/25",
  time: "Sunday morning"
};
