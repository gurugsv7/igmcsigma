import React from "react";
import { useNavigate } from "react-router-dom";

const DelegatePass = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-8 pb-24 px-6">
      <button
        onClick={() => navigate(-1)}
        className="absolute left-4 top-8 flex items-center px-3 py-1 rounded-lg bg-cyan-900/70 border border-cyan-400/30 text-cyan-200 hover:bg-cyan-800/90 hover:text-white transition-all shadow-sm"
        style={{ zIndex: 10 }}
        aria-label="Back"
      >
        <span className="mr-1 text-lg" aria-hidden="true">&#8592;</span>
        <span className="text-sm font-medium">Back</span>
      </button>
      <h2 className="text-3xl font-bold text-center text-cyan-300 mb-4 mt-4">Buy Delegate Pass</h2>
      <p className="text-lg text-white/80 mb-4 text-center">
        Secure your entry to STRIATUM 3.0! The delegate pass is required for participation in all events and workshops.
      </p>
      <div className="max-w-lg mx-auto bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border border-cyan-400/20 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-cyan-200 mb-2">Delegate Pass Tiers</h3>
        <ul className="mb-4 text-white/80 list-disc pl-6">
          <li>
            <span className="font-bold text-cyan-300">TIER 1 – NOVUS CEREBRI:</span> Rs. 500<br />
            <span className="text-xs text-gray-400">Basic access to all academic events and workshops</span>
          </li>
          <li className="mt-2">
            <span className="font-bold text-purple-300">TIER 2 – MAGNUS CEREBRI:</span> Rs. 700<br />
            <span className="text-xs text-gray-400">Includes Panel Discussions and GALA Night</span>
          </li>
        </ul>
        <div className="mb-4 text-white/70">
          <span className="font-semibold text-cyan-300">Note:</span> Delegate pass is mandatory for all participants except for a few events as mentioned in the event details.
        </div>
        <div className="mb-4 text-white/70">
          <span className="font-semibold text-cyan-300">How to Buy:</span>
          <ol className="list-decimal pl-6 mt-2">
            <li>Fill out the delegate registration form below.</li>
            <li>Proceed to payment via the provided link or QR code.</li>
            <li>Receive your confirmation email and digital pass.</li>
          </ol>
        </div>
        <div className="mb-4 text-white/70">
          <span className="font-semibold text-cyan-300">Contact:</span> striatum.3.igmcri@gmail.com
        </div>
      </div>
      <div className="max-w-lg mx-auto bg-gradient-to-br from-cyan-800/30 to-purple-800/30 border border-cyan-400/10 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-cyan-200 mb-2">Delegate Registration Form</h3>
        <form>
          <div className="mb-4">
            <label className="block text-sm text-cyan-300 mb-1">Full Name</label>
            <input type="text" className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-cyan-300 mb-1">Email Address</label>
            <input type="email" className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-cyan-300 mb-1">Phone Number</label>
            <input type="tel" className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-cyan-300 mb-1">Institution</label>
            <input type="text" className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-cyan-300 mb-1">Select Tier</label>
            <select className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400" required>
              <option value="">Select Tier</option>
              <option value="novus">TIER 1 – NOVUS CEREBRI (Rs. 500)</option>
              <option value="magnus">TIER 2 – MAGNUS CEREBRI (Rs. 700)</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 mt-2"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default DelegatePass;
