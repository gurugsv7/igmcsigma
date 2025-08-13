// src/Contact.tsx
import React from "react";
import { Phone, Users } from "lucide-react";

const contacts = [
  {
    section: "PRESIDENT",
    people: [
      { title: "President", name: "Abishek M", phone: "9150411735" }
    ]
  },
  {
    section: "ADVISORY BOARD",
    people: [
      { title: "Vice President", name: "Sanjeev S", phone: "9080617754" },
      { title: "Joint Secretary", name: "Monishwar K", phone: "8825498509" },
      { title: "Treasurer", name: "Srihariharan L", phone: "9597080710" },
      { title: "Public Relations", name: "Lalithkumar M", phone: "9345831990" }
    ]
  },
  {
    section: "EXECUTIVE BOARD",
    people: [
      { title: "General Secretary", name: "Massilamany Sravanti", phone: "9080166120" },
      { title: "Cultural Secretary", name: "Gokulakannan G", phone: "6379854373" },
      { title: "Academic Secretary", name: "Vengataramanan Tirou", phone: "9952260625" },
      { title: "Sports Secretary", name: "Manibalan D", phone: "8525053285" },
      { title: "Fine Arts Secretary", name: "Vishwesh R", phone: "8778980736" },
      { title: "Literature and Debate Secretary", name: "Dhanvarshini R", phone: "6384099666" },
      { title: "Social Service Secretary", name: "Mohammed Ajmal S", phone: "9500547183" },
      { title: "Photography Secretary", name: "Vijayashanthini S", phone: "7418283497" },
      { title: "Chief Designer", name: "Kamalivathani", phone: "6380964050" },
      { title: "Technical Secretary", name: "Thamizhamudan S", phone: "8838810278" },
      { title: "Awards and Accommodation Secretary", name: "Kaviya S", phone: "9791466866" },
      { title: "Food and Transport Secretary", name: "Prathisha D", phone: "8148953267" },
      { title: "Anti-Ragging and Students Wellness Secretary", name: "Sreevathsun S", phone: "9344372089" }
    ]
  }
];

const Contact = () => (
  <div className="min-h-screen pt-8 pb-24 px-6">
    <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-8">
      Contact SIGMA’25 Team
    </h2>
    <div className="max-w-3xl mx-auto space-y-8">
      {contacts.filter(section => section.people.length > 0).map((section, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            {section.section}
          </h3>
          <ul>
            {section.people.map((c, i) => (
              <li
                key={i}
                className="py-2 flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <span className="font-medium text-cyan-200">{c.title}</span>
                <span className="ml-2 text-gray-200">{c.name}</span>
                <a
                  href={`tel:${c.phone}`}
                  className="ml-2 flex items-center text-teal-300 hover:underline"
                  style={{ wordBreak: "break-all" }}
                >
                  <Phone className="w-4 h-4 mr-1" /> {c.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="bg-gradient-to-r from-purple-500/10 to-teal-500/10 border border-purple-400/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-purple-300 mb-4">General Queries</h3>
        <p className="text-gray-300">
          For any queries regarding SIGMA’25 or the event, please contact any of the above numbers. The team is available to assist you with registration, event details, and support.
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
