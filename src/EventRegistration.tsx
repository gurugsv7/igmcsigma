import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

const qrPlaceholder = "/qrpayment.jpg";

// Cloudinary config
const CLOUDINARY_CLOUD_NAME = "dzp9gxlh8";
const CLOUDINARY_UPLOAD_PRESET = "regis_payment";

// Event info map
const EVENT_INFO: Record<string, { name: string; price: string; prize: string }> = {
  SeniorQuiz: {
    name: "Senior Quiz",
    price: "₹600 per team",
    prize: "₹40,000",
  },
  JuniorQuiz: {
    name: "Junior Quiz",
    price: "₹600 per team",
    prize: "₹30,000",
  },
  OnlineQuiz: {
    name: "Online Quiz",
    price: "₹300 per team",
    prize: "₹20,000",
  },
  CasePulse: {
    name: "Case Pulse",
    price: "₹300 (Single), ₹400 (Team of 2)",
    prize: "₹3,000",
  },
  Nexus: {
    name: "Nexus (Paper Presentation)",
    price: "₹300 (Single), ₹400 (Team of 2)",
    prize: "₹3,000",
  },
  AxonAlley: {
    name: "Axon Alley (Poster Presentation)",
    price: "₹300 (Single), ₹400 (Team of 2)",
    prize: "₹3,000",
  },
  PulsatingPalettes: {
    name: "Pulsating Palettes (Body Painting)",
    price: "₹150 per team",
    prize: "₹1,500",
  },
  Cineplexus: {
    name: "Cineplexus (Short Film)",
    price: "₹500",
    prize: "₹10,000",
  },
  InsideICU: {
    name: "Inside the ICU",
    price: "Delegate Pass Required",
    prize: "-",
  },
  RoadToResidency: {
    name: "The Road to Residency",
    price: "Delegate Pass Required",
    prize: "-",
  },
  // Add more events as needed
  Sonostrike: {
    name: "SONOSTRIKE • Radiology EFAST Workshop",
    price: "₹600",
    prize: "-",
  },
  CodeWild: {
    name: "CODE WILD • Wilderness Medicine",
    price: "₹500",
    prize: "-",
  },
  Occulex: {
    name: "OCCULEX • Ophthalmology Workshop",
    price: "₹500",
    prize: "-",
  },
  Anastamos: {
    name: "ANASTAMOS • Basic Suturing Skills",
    price: "₹500",
    prize: "-",
  },
  Reviva: {
    name: "REVIVA • Neonatology Resuscitation Practices",
    price: "₹500",
    prize: "-",
  },
  Paramatrix: {
    name: "PARAMATRIX • Paramedical Workshop",
    price: "₹500",
    prize: "-",
  },
  ExodontiaX: {
    name: "EXODONTIA'X • Dental Workshop",
    price: "₹500",
    prize: "-",
  },
  DisasterX: {
    name: "DISASTER X • Disaster Management Workshop",
    price: "₹500",
    prize: "-",
  },
  Vivantia: {
    name: "VIVANTIA • Obstetric Workshop",
    price: "₹500",
    prize: "-",
  },
  SonicShift: {
    name: "THE SONIC SHIFT • Basic Anaesthesiology Workshop",
    price: "₹500",
    prize: "-",
  },
  SmartAI: {
    name: "SMART • AI for Research",
    price: "₹500",
    prize: "-",
  },
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB

const EventRegistration: React.FC = () => {
  const query = useQuery();
  const eventKey = query.get("event") || "SeniorQuiz";
  const event = EVENT_INFO[eventKey] || EVENT_INFO["SeniorQuiz"];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    year: "",
    category: "student",
    paymentScreenshot: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, files } = e.target as any;
    if (name === "paymentScreenshot" && files && files[0]) {
      if (files[0].size > MAX_FILE_SIZE) {
        setError("File is too large! Please upload an image less than 4MB.");
        return;
      }
      setError(null);
      setForm((prev) => ({
        ...prev,
        [name]: files[0],
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

    // Prepare EmailJS form data
    if (!formRef.current) return;

    // Upload screenshot to Cloudinary if present
    let screenshotUrl = "";
    if (form.paymentScreenshot) {
      setError("Uploading screenshot...");
      try {
        screenshotUrl = await uploadToCloudinary(form.paymentScreenshot);
      } catch (err) {
        setIsSubmitting(false);
        setError("Failed to upload screenshot. Please try again.");
        return;
      }
    }

    // Remove the file input value before sending to EmailJS
    if (formRef.current.elements.namedItem("paymentScreenshot")) {
      (formRef.current.elements.namedItem("paymentScreenshot") as HTMLInputElement).value = "";
    }

    // Append event and user info to hidden fields for EmailJS
    const formElement = formRef.current;
    (formElement.elements.namedItem("event_name") as HTMLInputElement).value = event.name;
    (formElement.elements.namedItem("registrant_name") as HTMLInputElement).value = form.name;
    (formElement.elements.namedItem("registrant_email") as HTMLInputElement).value = form.email;
    (formElement.elements.namedItem("registrant_phone") as HTMLInputElement).value = form.phone;
    (formElement.elements.namedItem("registrant_institution") as HTMLInputElement).value = form.institution;
    (formElement.elements.namedItem("registrant_year") as HTMLInputElement).value = form.year;
    (formElement.elements.namedItem("registrant_category") as HTMLInputElement).value = form.category;
    (formElement.elements.namedItem("payment_screenshot_url") as HTMLInputElement).value = screenshotUrl;

    emailjs.sendForm(
      "igmcsigma",
      "template_0uzpwjc",
      formRef.current,
      "acbz69d146b3J-jEm"
    ).then(
      (result) => {
        setIsSubmitting(false);
        setSubmitted(true);
      },
      (error) => {
        setIsSubmitting(false);
        setError("Failed to send registration email. Please try again.");
      }
    );
  }

  // Helper: is this a workshop? (no prize)
  const isWorkshop = !event.prize || event.prize === "-";

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-8 pb-24 px-6">
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-green-300 mb-4">Registration Successful!</h2>
          <p className="text-gray-300 mb-4">
            Thank you for registering for <span className="text-cyan-300 font-semibold">{event.name}</span>.<br />
            You will receive a confirmation email soon.
          </p>
          <div className="bg-black/20 rounded-lg p-3 mb-4">
            <p className="text-sm text-gray-400">Registration ID</p>
            <p className="text-cyan-300 font-mono">EVT-{Date.now().toString().slice(-6)}</p>
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
    <div className="min-h-screen pt-8 pb-24 px-6">
      <div className="max-w-lg mx-auto bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border border-cyan-400/20 rounded-2xl p-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-2">Register for {event.name}</h2>
        <div className="flex justify-center gap-4 mb-4">
          <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
            Entry Fee: {event.price}
          </div>
          {!isWorkshop && (
            <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
              Prize: {event.prize}
            </div>
          )}
        </div>
        {error && (
          <div className="bg-red-500/10 border border-red-400/30 rounded-lg px-4 py-2 text-red-300 font-medium mb-4">
            {error}
          </div>
        )}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          {/* Hidden fields for EmailJS variables */}
          <input type="hidden" name="event_name" />
          <input type="hidden" name="registrant_name" />
          <input type="hidden" name="registrant_email" />
          <input type="hidden" name="registrant_phone" />
          <input type="hidden" name="registrant_institution" />
          <input type="hidden" name="registrant_year" />
          <input type="hidden" name="registrant_category" />
          <input type="hidden" name="payment_screenshot_url" />

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
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Institution</label>
            <input
              type="text"
              name="institution"
              value={form.institution}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Year of Study</label>
            <input
              type="text"
              name="year"
              value={form.year}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="student">Medical Student</option>
              <option value="paramedic">Paramedic</option>
              <option value="faculty">Faculty/Doctor</option>
              <option value="external">External Participant</option>
            </select>
          </div>
          <div className="flex justify-center gap-4 my-4">
            <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
              Entry Fee: {event.price}
            </div>
            {!isWorkshop && (
              <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
                Prize: {event.prize}
              </div>
            )}
          </div>
          <div className="my-4">
            <div className="bg-cyan-900/30 border border-cyan-400/20 rounded-lg p-3 mb-2 text-cyan-200 text-sm">
              <strong>How to Pay:</strong>
              <ol className="list-decimal pl-5 mt-1 mb-2">
                <li>Scan the QR code below using any UPI app (Google Pay, PhonePe, Paytm, etc.).</li>
                <li>Enter the correct amount as per your event/workshop.</li>
                <li>Complete the payment and take a screenshot of the successful transaction.</li>
                <li>Upload the screenshot using the button below.</li>
              </ol>
              <span className="text-yellow-300">Note: Registration is valid only after payment and screenshot upload.</span>
            </div>
            <div className="flex justify-center mb-2">
              <img src={qrPlaceholder} alt="Payment QR" className="w-40 h-40 rounded-lg border border-cyan-400/30" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Upload Payment Screenshot</label>
            <input
              type="file"
              name="paymentScreenshot"
              accept="image/*"
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
            />
            <div className="text-xs text-gray-400 mt-1">Max file size: 4MB. Will be uploaded to Cloudinary and link sent via email.</div>
          </div>
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
};

export default EventRegistration;
