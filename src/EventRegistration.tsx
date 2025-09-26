import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import qrPayment from "./images/qrpayment.jpg";
import { supabase } from "./supabaseClient";

// Cloudinary config
const CLOUDINARY_CLOUD_NAME = "dzp9gxlh8";
const CLOUDINARY_UPLOAD_PRESET = "regis_payment";

// Event info map
const EVENT_INFO: Record<string, { name: string; price: string; prize: string; delegateRequired: boolean; teamSize: number }> = {
  AxonAlley: {
    name: "Poster Presentation: Axon Alley",
    price: "₹300 (Single) / ₹400 (Team of 2)",
    prize: "₹3,000",
    delegateRequired: false,
    teamSize: 2
  },
  CasePulse: {
    name: "Case Presentation: Case Pulse",
    price: "₹300 (Single) / ₹400 (Team of 2)",
    prize: "₹3,000",
    delegateRequired: false,
    teamSize: 2
  },
  Nexus: {
    name: "Paper Presentation: Nexus",
    price: "₹300 (Single) / ₹400 (Team of 2)",
    prize: "₹3,000",
    delegateRequired: false,
    teamSize: 2
  },
  PulsatingPalettes: {
    name: "Body Painting: Pulsating Palettes",
    price: "₹150 per team",
    prize: "₹1,500",
    delegateRequired: false,
    teamSize: 3
  },
  Cineplexus: {
    name: "Short Film: Cineplexus",
    price: "₹500 per team",
    prize: "₹10,000",
    delegateRequired: false,
    teamSize: 10 // Estimate, not specified, can be adjusted
  },
  SeniorQuiz: {
    name: "Senior Quiz (Peristalympics)",
    price: "₹600 per team",
    prize: "₹40,000",
    delegateRequired: false,
    teamSize: 3
  },
  JuniorQuiz: {
    name: "Junior Quiz (Vistura)",
    price: "₹600 per team",
    prize: "₹30,000",
    delegateRequired: false,
    teamSize: 3
  },
  OnlineQuiz: {
    name: "Online Quiz (Pancrithon)",
    price: "₹300 per team",
    prize: "₹20,000",
    delegateRequired: false,
    teamSize: 3
  },
  DisasterX: {
    name: "Disaster Management Workshop: DISASTER X",
    price: "Delegate Pass Required",
    prize: "-",
    delegateRequired: true,
    teamSize: 1
  },
  Vivantia: {
    name: "Obstetric Workshop: VIVANTIA",
    price: "Delegate Pass Required",
    prize: "-",
    delegateRequired: true,
    teamSize: 1
  },
  CodeWild: {
    name: "Wilderness Medicine: CODE WILD",
    price: "Delegate Pass Required",
    prize: "-",
    delegateRequired: true,
    teamSize: 1
  },
  Occulex: {
    name: "Ophthalmology Workshop: OCCULEX",
    price: "Delegate Pass Required",
    prize: "-",
    delegateRequired: true,
    teamSize: 1
  },
  SonicShift: {
    name: "Basic Anaesthesiology Workshop: THE SONIC SHIFT",
    price: "Delegate Pass Required",
    prize: "-",
    delegateRequired: true,
    teamSize: 1
  },
  Anastamos: {
    name: "Basic Suturing Skills: ANASTAMOS",
    price: "Delegate Pass Required",
    prize: "-",
    delegateRequired: true,
    teamSize: 1
  },
  Reviva: {
    name: "Neonatology Resuscitation Practices: REVIVA",
    price: "Delegate Pass Required",
    prize: "-",
    delegateRequired: true,
    teamSize: 1
  },
  SmartAI: {
    name: "AI for Research: SMART",
    price: "Delegate Pass Required",
    prize: "-",
    delegateRequired: true,
    teamSize: 1
  },
  ExodontiaX: {
    name: "Dental Workshop: EXODONTIA’X’",
    price: "Delegate Pass Required",
    prize: "-",
    delegateRequired: true,
    teamSize: 1
  },
  Paramatrix: {
    name: "Paramedical Workshop: PARAMATRIX",
    price: "Delegate Pass Required",
    prize: "-",
    delegateRequired: true,
    teamSize: 1
  },
  Sonostrike: {
    name: "Radiology EFAST Workshop: SONOSTRIKE",
    price: "Delegate Pass Required",
    prize: "-",
    delegateRequired: true,
    teamSize: 1
  }
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB

const EventRegistration: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eventKey = new URLSearchParams(location.search).get("event") || "SeniorQuiz";
  const event = EVENT_INFO[eventKey] || EVENT_INFO["SeniorQuiz"];
  const [discountedPrice, setDiscountedPrice] = useState<string | null>(null);
  const [couponStatus, setCouponStatus] = useState<string | null>(null);
  const [couponInput, setCouponInput] = useState<string>("");
  const [couponApplied, setCouponApplied] = useState<boolean>(false);

const [form, setForm] = useState({
    members: [{ name: "", phone: "", year: "" }],
    email: "",
    institution: "",
    category: "student",
    delegate_id: "",
    paymentScreenshot: null as File | null,
    coupon: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  // Handles changes for all fields, including member names
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, files, dataset } = e.target as any;
    if (name === "coupon") {
      setCouponInput(value);
      setCouponStatus(null);
      setCouponApplied(false);
    } else if (name === "paymentScreenshot" && files && files[0]) {
      if (files[0].size > MAX_FILE_SIZE) {
        setError("File is too large! Please upload an image less than 4MB.");
        return;
      }
      setError(null);
      setForm((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else if (["memberName", "memberPhone", "memberYear"].includes(name) && dataset.index !== undefined) {
      // Update specific member field
      const idx = parseInt(dataset.index, 10);
      setForm((prev) => {
        const members = [...(prev.members || [])];
        if (!members[idx]) members[idx] = { name: "", phone: "", year: "" };
        if (name === "memberName") members[idx].name = value;
        if (name === "memberPhone") members[idx].phone = value;
        if (name === "memberYear") members[idx].year = value;
        return { ...prev, members };
      });
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

    // Prepare template params directly from state
    const teamMembersStr = (form.members || []).map(
      (m, idx) => `Member ${idx + 1}: ${m.name} (${m.phone}, ${m.year})`
    ).join("; ");
    const templateParams = {
      event_name: event.name,
      team_members: teamMembersStr,
      registrant_name: form.members[0]?.name || "",
      delegate_id: form.delegate_id,
      registrant_email: form.email,
      registrant_phone: form.members[0]?.phone || "",
      registrant_institution: form.institution,
      registrant_year: form.members[0]?.year || "",
      registrant_category: form.category,
      payment_screenshot_url: screenshotUrl,
      coupon_code: form.coupon,
    };

    // Store registration in Supabase
    const { error: supabaseError } = await supabase.from("EventRegistration").insert([
      {
        name: form.members[0]?.name || "",
        email: form.email,
        phone: form.members[0]?.phone || "",
        year: form.members[0]?.year || "",
        event_id: eventKey,
        registration_time: new Date().toISOString(),
        payment_screenshot_url: screenshotUrl,
        team_members: JSON.stringify(form.members),
coupon_applied: form.coupon && form.coupon.trim() !== "" ? "yes" : "no"
      }
    ]);
    if (supabaseError) {
      setIsSubmitting(false);
      setError("Failed to save registration. Please try again.");
      return;
    }

    console.log("Sending registration data to EmailJS:", templateParams);

    emailjs.send(
      "igmcsigma",
      "template_0uzpwjc",
      templateParams,
      "acbz69d146b3J-jEm"
    ).then(
      (result) => {
        setIsSubmitting(false);
        setSubmitted(true);
        setForm({
          members: Array(event.teamSize).fill({ name: "", phone: "", year: "" }),
          email: "",
          institution: "",
          category: "student",
          delegate_id: "",
          paymentScreenshot: null,
          coupon: "",
        });
      },
      (error) => {
        setIsSubmitting(false);
        setError("Failed to send registration email. Please try again.");
      }
    );
  }

  // Helper: is this a workshop? (no prize)
  const isWorkshop = !event.prize || event.prize === "-";

  // Registration closed popup for Anastamos
  if (eventKey === "Anastamos") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-16 pb-24 px-6">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 border border-gray-400/30 rounded-2xl p-8 max-w-md text-center shadow-lg">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Registration Closed</h2>
          <p className="text-gray-300 mb-4">
            Sorry, registration for <span className="text-cyan-300 font-semibold">{event.name}</span> is closed.
          </p>
          <a
            href="/"
            className="bg-gray-400 text-gray-700 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 cursor-not-allowed pointer-events-none"
            tabIndex={-1}
            aria-disabled="true"
          >
            Registration Closed
          </a>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-16 pb-24 px-6">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-6 flex items-center px-3 py-1 rounded-lg bg-cyan-900/70 border border-cyan-400/30 text-cyan-200 hover:bg-cyan-800/90 hover:text-white transition-all shadow-sm"
          style={{ zIndex: 10 }}
          aria-label="Back"
        >
          <span className="mr-1 text-lg" aria-hidden="true">&#8592;</span>
          <span className="text-sm font-medium">Back</span>
        </button>
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
      <div className="max-w-lg mx-auto bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border border-cyan-400/20 rounded-2xl p-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-2">Register for {event.name}</h2>
        <div className="mb-4 text-white/70 text-center">
          {/* Removed duplicate price and payment info from the top */}
        </div>
        {error && (
          <div className="bg-red-500/10 border border-red-400/30 rounded-lg px-4 py-2 text-red-300 font-medium mb-4">
            {error}
          </div>
        )}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          {/* Hidden fields for EmailJS variables */}
          <input type="hidden" name="event_name" />
          <input type="hidden" name="team_members" />
          <input type="hidden" name="registrant_email" />
          <input type="hidden" name="registrant_phone" />
          <input type="hidden" name="registrant_institution" />
          <input type="hidden" name="registrant_year" />
          <input type="hidden" name="registrant_category" />
          <input type="hidden" name="payment_screenshot_url" />

          {/* Team member names */}
          {/* Team Leader (Member 1) */}
          <div className="mb-2 border-b border-cyan-400/10 pb-2">
            <label className="block text-sm text-cyan-300 mb-1">
              {event.teamSize === 1 ? "Full Name" : "Member 1 Name (Team Leader)"}
            </label>
            <input
              type="text"
              name="memberName"
              data-index={0}
              value={form.members[0]?.name || ""}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
              placeholder={event.teamSize === 1 ? "Full Name" : "Member 1 Name (Team Leader)"}
            />
            <label className="block text-xs text-cyan-200 mt-1">Phone Number</label>
            <input
              type="tel"
              name="memberPhone"
              data-index={0}
              value={form.members[0]?.phone || ""}
              onChange={handleChange}
              required
              pattern="^(\+91\d{10}|\d{10})$"
              title="Enter a valid 10-digit number or +91 followed by 10 digits"
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
              placeholder="Phone Number"
            />
            <label className="block text-xs text-cyan-200 mt-1">Year of Study</label>
            <input
              type="text"
              name="memberYear"
              data-index={0}
              value={form.members[0]?.year || ""}
              onChange={handleChange}
              required
              className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
              placeholder="Year of Study"
            />
          </div>
          {/* Other Members */}
          {[...Array(event.teamSize - 1)].map((_, idx) => (
            <div key={idx + 1} className="mb-2 border-b border-cyan-400/10 pb-2">
              <label className="block text-sm text-cyan-300 mb-1">
                {`Member ${idx + 2} Name`}
              </label>
<input
                type="text"
                name="memberName"
                data-index={idx + 1}
                value={form.members[idx + 1]?.name || ""}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
                placeholder={`Member ${idx + 2} Name`}
              />
              <label className="block text-xs text-cyan-200 mt-1">Phone Number</label>
<input
                type="tel"
                name="memberPhone"
                data-index={idx + 1}
                value={form.members[idx + 1]?.phone || ""}
                onChange={handleChange}
                pattern="^(\+91\d{10}|\d{10})$"
                title="Enter a valid 10-digit number or +91 followed by 10 digits"
                className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
                placeholder="Phone Number"
              />
              <label className="block text-xs text-cyan-200 mt-1">Year of Study</label>
              <input
                type="text"
                name="memberYear"
                data-index={idx + 1}
                value={form.members[idx + 1]?.year || ""}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
                placeholder="Year of Study"
              />
            </div>
          ))}
          {event.delegateRequired && (
            <div>
              <label className="block text-sm text-cyan-300 mb-1">Delegate Pass ID</label>
              <input
                type="text"
                name="delegate_id"
                value={form.delegate_id}
                onChange={handleChange}
                required={event.delegateRequired}
                className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
                placeholder="Enter your Delegate Pass ID"
              />
              <div className="text-xs text-gray-400 mt-1">Enter the Delegate Pass ID you received after delegate registration.</div>
            </div>
          )}
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
              <img src={qrPayment} alt="Payment QR" className="w-40 h-40 rounded-lg border border-cyan-400/30" />
            </div>
          </div>
<div>
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
            <div className="text-xs text-gray-400 mt-1">Max file size: 4MB. Will be uploaded to Cloudinary and link sent via email.</div>
          </div>
          <div>
            <label className="block text-sm text-cyan-300 mb-1">Coupon Code</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="coupon"
                value={couponInput}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-gray-900/60 border border-cyan-400/20 text-white focus:outline-none focus:border-cyan-400"
                placeholder="Enter coupon code (if any)"
                autoComplete="off"
                disabled={couponApplied}
              />
              <button
                type="button"
                className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-lg"
                onClick={() => {
                  const code = couponInput.trim().replace(/[^A-Z0-9!]/gi, "").toUpperCase();
                  if (code === "SYNAPSE25!" || code === "SYNAPSE25!") {
                    // Extract numeric price from event.price
                    let priceStr = event.price;
                    let price = 0;
                    if (priceStr.includes("/")) {
                      priceStr = priceStr.split("/")[0];
                    }
                    const match = priceStr.match(/(\d+)/);
                    if (match) {
                      price = parseInt(match[1], 10);
                      const discounted = Math.round(price * 0.95);
                      setDiscountedPrice(`₹${discounted} (5% off)`);
                      setCouponStatus("Coupon applied: 5% discount");
                      setCouponApplied(true);
                      setForm((prev) => ({
                        ...prev,
                        coupon: couponInput
                      }));
                    }
                  } else {
                    setDiscountedPrice(null);
                    setCouponStatus("Sorry, this coupon does not exist or has been used.");
                    setCouponApplied(false);
                    setForm((prev) => ({
                      ...prev,
                      coupon: ""
                    }));
                  }
                }}
                disabled={couponApplied}
              >
                {couponApplied ? "Applied" : "Submit"}
              </button>
            </div>
            {couponStatus && (
              <div className={`mt-1 text-sm ${couponStatus.startsWith("Sorry") ? "text-red-400" : "text-green-400"}`}>
                {couponStatus}
              </div>
            )}
          </div>
          <div className="flex gap-4 my-4">
            <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-lg px-4 py-2 text-cyan-300 font-medium">
              Entry Fee: {discountedPrice ? discountedPrice : event.price}
            </div>
            {!isWorkshop && (
              <div className="bg-purple-500/10 border border-purple-400/30 rounded-lg px-4 py-2 text-purple-300 font-medium">
                Prize: {event.prize}
              </div>
            )}
          </div>
        {/* Inclusive of lunch for selected events */}
        {["CodeWild","SonicShift","DisasterX","SmartAI","SeniorQuiz","JuniorQuiz","OnlineQuiz"].includes(eventKey) && (
          <div className="font-bold text-cyan-300 mb-2 text-center">Inclusive of lunch</div>
        )}
        {/* Lunch excluded for all other events */}
        {!["CodeWild","SonicShift","DisasterX","SmartAI","SeniorQuiz","JuniorQuiz","OnlineQuiz"].includes(eventKey) && (
          <div className="font-bold text-cyan-300 mb-2 text-center">Lunch excluded; will be provided on request at additional cost.</div>
        )}
        <button
          type="button"
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 mt-2"
          onClick={() => navigate('/accommodation')}
        >
          Get Accommodation
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 mt-3"
        >
          {isSubmitting ? "Submitting..." : "Submit Registration"}
        </button>
        </form>
      </div>
    </div>
  );
};

export default EventRegistration;
