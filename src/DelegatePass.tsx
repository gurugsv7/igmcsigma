import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CLOUDINARY_API_URL, CLOUDINARY_UPLOAD_PRESET } from "./cloudinaryConfig";
import emailjs from "@emailjs/browser";
import qrPayment from "./images/qrpayment.jpg";
import { supabase } from "./supabaseClient";

const DelegatePass = () => {
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    tier: "",
    paymentScreenshot: null as File | null,
  });
  const [paymentScreenshotUrl, setPaymentScreenshotUrl] = useState<string | null>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [delegateId, setDelegateId] = useState<string | null>(null);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, files } = e.target as any;
    if (files && files[0] && name === "paymentScreenshot") {
      setForm((prev) => ({
        ...prev,
        [name]: files[0],
      }));
      setIsUploading(true);
      // Upload to Cloudinary
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      try {
        const res = await fetch(CLOUDINARY_API_URL, {
          method: "POST",
          body: data,
        });
        const json = await res.json();
        setPaymentScreenshotUrl(json.secure_url);
        setIsUploading(false);
      } catch (err) {
        alert("Failed to upload image. Please try again.");
        setPaymentScreenshotUrl(null);
        setIsUploading(false);
      }
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowPaymentModal(true);
  }

  function generateDelegateId() {
    let id = "";
    for (let i = 0; i < 12; i++) {
      id += Math.floor(Math.random() * 10).toString();
    }
    return id;
  }

  async function handlePaymentSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!paymentScreenshotUrl) {
      alert("Please upload the payment screenshot before submitting.");
      return;
    }
    setIsSubmitting(true);

    const newDelegateId = generateDelegateId();
    setDelegateId(newDelegateId);

    // Store delegate pass in Supabase
    const registrationId = `DP-${newDelegateId.slice(-6)}`;
    const { error: supabaseError } = await supabase.from("DelegatePass").insert([
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        institution: form.institution,
        pass_type: form.tier,
        purchase_time: new Date().toISOString(),
        delegate_id: newDelegateId,
        registration_id: registrationId,
        payment_screenshot_url: paymentScreenshotUrl
      }
    ]);
    if (supabaseError) {
      setIsSubmitting(false);
      alert("Failed to save delegate pass. Please try again.");
      return;
    }

    try {
      await emailjs.send(
        "igmcsigma",
        "template_207v92k",
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          institution: form.institution,
          tier: form.tier,
          paymentScreenshotUrl,
          delegateIdRaw: newDelegateId,
          registrationId: registrationId,
        },
        "acbz69d146b3J-jEm"
      );
      setIsSubmitting(false);
      setSubmitted(true);
      setShowPaymentModal(false);
    } catch (err) {
      setIsSubmitting(false);
      alert("Failed to send registration email. Please try again.");
    }
  }

  return (
    <div className="min-h-screen pt-16 pb-24 px-6">
      <button
        onClick={() => navigate(-1)}
        className="absolute left-4 top-6 flex items-center px-3 py-1 rounded-lg bg-cyan-900/70 border border-cyan-400/30 text-cyan-200 hover:bg-cyan-800/90 hover:text-white transition-all shadow-sm"
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
          <span className="font-semibold text-cyan-300">Note:</span> Delegate pass is mandatory for all participants except for a few events and presentations as mentioned in the event details. Presentations do not require a delegate pass.
        </div>
        <div className="mb-4">
          <span className="font-semibold text-yellow-300">Important:</span>
          <span className="text-white"> Delegate registration is </span>
          <span className="font-semibold text-red-400">not refundable</span>
          <span className="text-white">.</span>
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
          <span className="font-semibold text-cyan-300">Contact:</span> striatum.3.igmcri@gmail.com<br />
          <span className="font-semibold text-cyan-300">Phone:</span> +91 95970 80710
        </div>
      </div>
      {submitted ? (
        <div className="max-w-lg mx-auto bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-8 text-center mt-8">
          <h2 className="text-2xl font-bold text-green-300 mb-4">Registration Successful!</h2>
          <p className="text-gray-300 mb-4">
            Thank you for purchasing your <span className="text-cyan-300 font-semibold">Delegate Pass</span>.<br />
            You will receive a confirmation email soon.
          </p>
          <div className="bg-black/20 rounded-lg p-3 mb-4">
            <p className="text-sm text-gray-400">Registration ID</p>
            <p className="text-cyan-300 font-mono">{delegateId ? `DP-${delegateId.slice(-6)}` : ""}</p>
          </div>
          <a
            href="/"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </a>
        </div>
      ) : (
        <div className="max-w-lg mx-auto bg-gradient-to-br from-cyan-800/30 to-purple-800/30 border border-cyan-400/10 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-cyan-200 mb-2">Delegate Registration Form</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-cyan-300 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-cyan-300 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-cyan-300 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
                required
                pattern="^(\+91\d{10}|\d{10})$"
                title="Enter a valid 10-digit number or +91 followed by 10 digits"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-cyan-300 mb-1">Institution</label>
              <input
                type="text"
                name="institution"
                value={form.institution}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-cyan-300 mb-1">Select Tier</label>
              <select
                name="tier"
                value={form.tier}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
                required
              >
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
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-400/30 rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-3 right-3 text-cyan-300 hover:text-white bg-cyan-900/40 rounded-full p-1"
              aria-label="Close"
            >
              <span className="text-xl font-bold">&times;</span>
            </button>
            <h3 className="text-xl font-bold text-cyan-300 mb-2 text-center">Complete Payment</h3>
            <div className="bg-cyan-900/30 border border-cyan-400/20 rounded-lg p-3 mb-2 text-cyan-200 text-sm">
              <strong>How to Pay:</strong>
              <ol className="list-decimal pl-5 mt-1 mb-2">
                <li>Scan the QR code below using any UPI app (Google Pay, PhonePe, Paytm, etc.).</li>
                <li>Enter the correct amount as per your selected tier.</li>
                <li>Complete the payment and take a screenshot of the successful transaction.</li>
                <li>Upload the screenshot using the button below.</li>
              </ol>
              <span className="text-yellow-300">Note: Registration is valid only after payment and screenshot upload.</span>
            </div>
            <div className="flex justify-center mb-2">
              <img src={qrPayment} alt="Payment QR" className="w-40 h-40 rounded-lg border border-cyan-400/30" />
            </div>
<form onSubmit={handlePaymentSubmit}>
              <div className="mb-4">
<div className="text-yellow-300 text-base mb-1 font-semibold">Screenshot with transaction ID visible required</div>
                <label className="block text-sm text-cyan-300 mb-1">Upload Payment Screenshot</label>
                <input
                  type="file"
                  name="paymentScreenshot"
                  accept="image/*"
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isUploading || !paymentScreenshotUrl}
                className={`w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 mt-2 ${isSubmitting || isUploading || !paymentScreenshotUrl ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                {isUploading
                  ? "Uploading..."
                  : isSubmitting
                  ? "Submitting..."
                  : "Submit Registration"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DelegatePass;
