// Reusable modal for workshop registration (paid & free)
// Usage: <WorkshopRegisterModal open={showModal} onClose={...} workshop={...} />
import React, { useState } from "react";

const qrPlaceholder = "/src/images/qrpayment.jpg";

export interface WorkshopRegisterModalProps {
  open: boolean;
  onClose: () => void;
  workshop: {
    name: string;
    price?: string; // undefined or empty for free
    date?: string;
    time?: string;
    incharges?: string;
    prerequisites?: string;
  };
}

export default function WorkshopRegisterModal({ open, onClose, workshop }: WorkshopRegisterModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    paymentScreenshot: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  }

  if (!open) return null;

  // Scroll to top of modal when opened
  const modalRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (open && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [open]);

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-8 text-center max-w-md w-full relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-cyan-300 hover:text-white bg-cyan-900/40 rounded-full p-1"
            aria-label="Close"
          >
            <span className="text-xl font-bold">&times;</span>
          </button>
          <h2 className="text-2xl font-bold text-green-300 mb-4">Registration Successful!</h2>
          <p className="text-gray-300 mb-4">
            Thank you for registering for <span className="text-cyan-300 font-semibold">{workshop.name}</span>.<br />
            You will receive a confirmation email soon.
          </p>
          <div className="bg-black/20 rounded-lg p-3 mb-4">
            <p className="text-sm text-gray-400">Registration ID</p>
            <p className="text-cyan-300 font-mono">WS-{Date.now().toString().slice(-6)}</p>
          </div>
          <a
            href="/"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        ref={modalRef}
        className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-400/30 rounded-2xl shadow-2xl p-8 max-w-md w-full relative overflow-y-auto max-h-[90vh] scroll-smooth"
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-cyan-300 hover:text-white bg-cyan-900/40 rounded-full p-1"
          aria-label="Close"
        >
          <span className="text-xl font-bold">&times;</span>
        </button>
        <h3 className="text-xl font-bold text-cyan-300 mb-2 text-center">Workshop Registration</h3>
        <div className="mb-4 text-center">
          <div className="text-lg font-semibold text-cyan-200">{workshop.name}</div>
          {workshop.date && <div className="text-cyan-300">{workshop.date}</div>}
          {workshop.time && <div className="text-purple-300">{workshop.time}</div>}
          {workshop.incharges && <div className="text-white/60">Incharges: {workshop.incharges}</div>}
          {workshop.prerequisites && <div className="text-white/60">Prerequisites: {workshop.prerequisites}</div>}
          {workshop.price && (
            <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium mt-2 inline-block">
              Entry Fee: {workshop.price}
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit}>
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
          {workshop.price ? (
            <>
              <div className="bg-cyan-900/30 border border-cyan-400/20 rounded-lg p-3 mb-4 text-cyan-200 text-sm">
                <strong>How to Pay:</strong>
                <ol className="list-decimal pl-5 mt-1 mb-2">
                  <li>Scan the QR code below using any UPI app (Google Pay, PhonePe, Paytm, etc.).</li>
                  <li>Enter the correct amount for this workshop.</li>
                  <li>Complete the payment and take a screenshot of the successful transaction.</li>
                  <li>Upload the screenshot using the button below.</li>
                </ol>
                <span className="text-yellow-300">Note: Registration is valid only after payment and screenshot upload.</span>
                <div className="flex justify-center my-4">
                  <img src={qrPlaceholder} alt="Payment QR" className="w-40 h-40 rounded-lg border border-cyan-400/30" />
                </div>
              </div>
              <div className="mb-4">
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
            </>
          ) : null}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 mt-2"
          >
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}
