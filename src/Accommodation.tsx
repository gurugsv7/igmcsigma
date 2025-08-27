import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import qrPayment from "./images/qrpayment.jpg";
import { allEventWorkshopDetails } from "./eventsData";

const CLOUDINARY_CLOUD_NAME = "dzp9gxlh8";
const CLOUDINARY_UPLOAD_PRESET = "regis_payment";
const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB

const Accommodation: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    college: "",
    idProof: null as File | null,
    events: [] as string[], // now array of event keys
    participationProof: null as File | null,
    arrival: "",
    departure: "",
    transactionId: "",
    paymentProof: null as File | null,
    email: "",
    phone: "",
  });

  // Prepare event/workshop options
  const eventOptions = Object.entries(allEventWorkshopDetails).map(([key, details]) => ({
    key,
    label: details?.title || key
  }));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, files, multiple, options } = e.target as any;
    if (files && files[0]) {
      if (files[0].size > MAX_FILE_SIZE) {
        setError("File is too large! Please upload an image less than 4MB.");
        return;
      }
      setError(null);
      setForm((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else if (multiple && name === "events") {
      // Multi-select for events
      const selected = Array.from(options).filter((o: any) => o.selected).map((o: any) => o.value);
      setForm((prev) => ({
        ...prev,
        events: selected,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  async function uploadToCloudinary(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.secure_url) {
      return data.secure_url;
    } else {
      throw new Error("Cloudinary upload failed");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    let idProofUrl = "";
    let participationProofUrl = "";
    let paymentProofUrl = "";

    try {
      if (form.idProof) idProofUrl = await uploadToCloudinary(form.idProof);
      if (form.participationProof) participationProofUrl = await uploadToCloudinary(form.participationProof);
      if (form.paymentProof) paymentProofUrl = await uploadToCloudinary(form.paymentProof);
    } catch (err) {
      setIsSubmitting(false);
      setError("Failed to upload one or more files. Please try again.");
      return;
    }

    const templateParams = {
      name: form.name,
      college: form.college,
      id_proof_url: idProofUrl,
      events: (form.events || []).map(
        (key) => eventOptions.find((o) => o.key === key)?.label || key
      ).join(", "),
      participation_proof_url: participationProofUrl,
      arrival: form.arrival,
      departure: form.departure,
      transaction_id: form.transactionId,
      payment_proof_url: paymentProofUrl,
      email: form.email,
      phone: form.phone,
    };

    emailjs.send(
      "service_kh999ms",
      "template_pf3w0ha",
      templateParams,
      "aW6oUkDunUsVZD8s8"
    ).then(
      (result) => {
        setIsSubmitting(false);
        setSubmitted(true);
        setForm({
          name: "",
          college: "",
          idProof: null,
          events: [],
          participationProof: null,
          arrival: "",
          departure: "",
          transactionId: "",
          paymentProof: null,
          email: "",
          phone: "",
        });
      },
      (error) => {
        setIsSubmitting(false);
        setError("Failed to send accommodation request. Please try again.");
      }
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-16 pb-24 px-6">
        <button
          onClick={() => {
            if (window.history.length > 2) {
              navigate(-1);
            } else {
              navigate("/", { replace: true });
            }
          }}
          className="absolute left-4 top-6 flex items-center px-3 py-1 rounded-lg bg-cyan-900/70 border border-cyan-400/30 text-cyan-200 hover:bg-cyan-800/90 hover:text-white transition-all shadow-sm"
          style={{ zIndex: 10 }}
          aria-label="Back"
        >
          <span className="mr-1 text-lg" aria-hidden="true">&#8592;</span>
          <span className="text-sm font-medium">Back</span>
        </button>
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-green-300 mb-4">Accommodation Request Submitted!</h2>
          <p className="text-gray-300 mb-4">
            Thank you for your request for accommodation.<br />
            You will receive a confirmation email soon.
          </p>
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
    <div className="min-h-screen pt-16 pb-24 px-6">
      <button
        onClick={() => {
          // Try to go back, but if not possible, go to home
          if (window.history.state && window.history.length > 1) {
            navigate(-1);
            setTimeout(() => {
              // If still on the same page, force to home
              if (window.location.pathname === "/accommodation") {
                navigate("/", { replace: true });
              }
            }, 200);
          } else {
            navigate("/", { replace: true });
          }
        }}
        className="absolute left-4 top-6 flex items-center px-3 py-1 rounded-lg bg-cyan-900/70 border border-cyan-400/30 text-cyan-200 hover:bg-cyan-800/90 hover:text-white transition-all shadow-sm"
        style={{ zIndex: 10 }}
        aria-label="Back"
      >
        <span className="mr-1 text-lg" aria-hidden="true">&#8592;</span>
        <span className="text-sm font-medium">Back</span>
      </button>
      <div className="max-w-lg mx-auto bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border border-cyan-400/20 rounded-2xl p-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-2">Accommodation Request (Non-AC Only)</h2>
        <div className="mb-4 text-white/70 text-center">
          <span className="font-semibold text-cyan-300">Note:</span> Accommodation is only for non-AC. Rs 50 prebooking is mandatory.
        </div>
        {error && (
          <div className="bg-red-500/10 border border-red-400/30 rounded-lg px-4 py-2 text-red-300 font-medium mb-4">
            {error}
          </div>
        )}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">College Name</label>
            <input
              type="text"
              name="college"
              value={form.college}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">ID Proof (Upload Image/PDF)</label>
            <input
              type="file"
              name="idProof"
              accept="image/*,application/pdf"
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
            <div className="text-xs text-gray-400 mt-1">Max file size: 4MB.</div>
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Events Participating</label>
            <EventAutocomplete
              options={eventOptions}
              value={form.events}
              onChange={newEvents => setForm(prev => ({ ...prev, events: newEvents }))}
            />
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Proof of Participation (Upload Image/PDF)</label>
            <input
              type="file"
              name="participationProof"
              accept="image/*,application/pdf"
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
            <div className="text-xs text-gray-400 mt-1">Max file size: 4MB.</div>
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Date and Time of Arrival</label>
            <input
              type="datetime-local"
              name="arrival"
              value={form.arrival}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Date and Time of Departure</label>
            <input
              type="datetime-local"
              name="departure"
              value={form.departure}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div className="my-4">
            <div className="bg-cyan-900/30 border border-cyan-400/20 rounded-lg p-3 mb-2 text-cyan-200 text-sm">
              <strong>How to Pay Rs 50 Prebooking:</strong>
              <ol className="list-decimal pl-5 mt-1 mb-2">
                <li>Scan the QR code below using any UPI app (Google Pay, PhonePe, Paytm, etc.).</li>
                <li>Enter Rs 50 as the amount.</li>
                <li>Complete the payment and note the Transaction ID.</li>
                <li>Upload the payment screenshot below.</li>
              </ol>
              <span className="text-yellow-300">Note: Accommodation is confirmed only after payment and proof upload.</span>
            </div>
            <div className="flex justify-center mb-2">
              <img src={qrPayment} alt="Payment QR" className="w-40 h-40 rounded-lg border border-cyan-400/30" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Transaction ID</label>
            <input
              type="text"
              name="transactionId"
              value={form.transactionId}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
              placeholder="Enter UPI/Bank Transaction ID"
            />
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Proof of Payment (Upload Image/PDF)</label>
            <input
              type="file"
              name="paymentProof"
              accept="image/*,application/pdf"
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
            <div className="text-xs text-gray-400 mt-1">Max file size: 4MB.</div>
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 mt-2"
          >
            {isSubmitting ? "Submitting..." : "Submit Accommodation Request"}
          </button>
        </form>
      </div>
    </div>
  );
};

/**
 * Autocomplete input for events/workshops.
 * Shows suggestions as you type, allows selection, and displays chips for selected.
 */
function EventAutocomplete({
  options,
  value,
  onChange,
}: {
  options: { key: string; label: string }[];
  value: string[];
  onChange: (newEvents: string[]) => void;
}) {
  const [input, setInput] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  // Filter options based on input and not already selected
  const filtered = input
    ? options.filter(
        (opt) =>
          opt.label.toLowerCase().includes(input.toLowerCase()) &&
          !value.includes(opt.key)
      )
    : options.filter((opt) => !value.includes(opt.key));

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
    setShowSuggestions(true);
  }

  function handleSelect(opt: { key: string; label: string }) {
    if (!value.includes(opt.key)) {
      onChange([...value, opt.key]);
    }
    setInput("");
    setShowSuggestions(false);
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && filtered.length > 0 && input.trim()) {
      handleSelect(filtered[0]);
      e.preventDefault();
    }
    if (e.key === "Backspace" && !input && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  }

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2 items-center bg-gray-900/60 border border-cyan-400/20 rounded-lg px-2 py-2">
        {value.map((ev, idx) => (
          <span key={ev + idx} className="bg-cyan-700/30 text-cyan-200 px-2 py-1 rounded-full text-xs flex items-center gap-1">
            {options.find((o) => o.key === ev)?.label || ev}
            <button
              type="button"
              className="ml-1 text-cyan-400 hover:text-red-400"
              onClick={() => onChange(value.filter((e, i) => i !== idx))}
              aria-label="Remove"
            >
              ×
            </button>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          onKeyDown={handleInputKeyDown}
          placeholder="Type to search events/workshops"
          className="flex-1 bg-transparent outline-none border-none text-white min-w-[120px] py-1"
        />
      </div>
      {showSuggestions && filtered.length > 0 && (
        <div className="absolute left-0 right-0 bg-gray-900 border border-cyan-400/30 rounded-b-lg shadow-lg z-20 max-h-48 overflow-y-auto">
          {filtered.map((opt) => (
            <div
              key={opt.key}
              className="px-3 py-2 cursor-pointer hover:bg-cyan-800/40 text-cyan-200"
              onMouseDown={() => handleSelect(opt)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
      <div className="text-xs text-gray-400 mt-1">
        Start typing to search and add events/workshops. Press Enter or click to select.
      </div>
    </div>
  );
}

export default Accommodation;
