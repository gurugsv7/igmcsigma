/*
TODO:
- [x] Analyze requirements and extract all new event/workshop names and details from the provided DOCX.
- [ ] Update main event and workshop listing pages (Events.tsx, Workshops.tsx).
- [x] Update each individual event/workshop page with new content and names.
- [x] Verify all changes and UI consistency.
*/

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Stethoscope, Heart, Brain, Microscope, Plus, Users, BookOpen, Clock, HeartPulse, AlertTriangle, Cpu, X } from "lucide-react";

// [Previous Dialog Component Code]
const RegistrationDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div 
        className="relative bg-gradient-to-b from-gray-900/90 to-gray-800/90 rounded-2xl p-6 max-w-sm w-full backdrop-blur-xl border-2 border-cyan-500/20 shadow-[0_0_25px_-5px_rgba(0,255,255,0.3)]"
        style={{
          boxShadow: "0 8px 32px -4px rgba(0,255,255,0.2), 0 4px 16px -2px rgba(180,0,255,0.15)"
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-cyan-500/10 rounded-full flex items-center justify-center border border-cyan-500/20">
            <span className="text-2xl" role="img" aria-label="timer">⏳</span>
          </div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
            Registration Opening Soon
          </h3>
          <p className="text-gray-300 text-sm">
            Workshop registrations will be available shortly. Stay tuned for updates!
          </p>
          <button
            onClick={onClose}
            className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-200 font-medium"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

const WorkshopsSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const workshops = [
    {
      id: 'sonostrike',
      title: 'SONOSTRIKE • Radiology EFAST Workshop',
      icon: Brain,
      color: 'blue',
      description: 'E-FAST (Extended Focused Assessment with Sonography in Trauma) workshop for rapid ultrasound assessment in trauma care. Hands-on and clinical simulation practices.',
      details: [
        'Indications and limitations of E-FAST',
        'Patient and machine preparation',
        'Systematic E-FAST exam sequence',
        'Step by step ultrasound technique',
        'Recognition of pathologies',
        'EFAST exam interpretation',
        'Algorithm-based decision making',
        'Hands-on and clinical simulation'
      ],
      duration: '4 hours (Forenoon session)',
      prerequisites: 'Medical students',
      capacity: 'N/A',
      date: '09/10/25',
      time: 'Forenoon'
    },
    {
      id: 'disaster-x',
      title: "DISASTER X • Disaster Management Workshop",
      icon: Stethoscope,
      color: 'red',
      description: 'Immersive scenario-based learning, triage drills, and evacuation planning for disaster preparedness in healthcare settings.',
      details: [
        'Disaster scenario assessment and medical response coordination',
        'Strategic planning for hospital fire evacuation',
        'Chemical mass casualty incident management',
        'Application of triage principles and victim prioritization',
        'Critical thinking in emergency situations',
        'Rapid clinical decision making',
        'Spatial awareness for hospital evacuation logistics',
        'Experiential learning through medical emergency simulations'
      ],
      duration: '8:00 AM to 4:00 PM (Full day session)',
      prerequisites: 'Medical students',
      capacity: 'N/A',
      date: '10/10/25',
      time: 'Full day'
    },
    {
      id: 'vivantia',
      title: 'VIVANTIA • Obstetric Workshop',
      icon: Heart,
      color: 'pink',
      description: 'Essential concepts and hands-on techniques for managing labor, including latest guidelines and intrapartum care.',
      details: [
        'Mechanism and conduct of labour (DOAP)',
        'LSCS',
        'Episiotomy suturing (hands-on)',
        'Postpartum hemorrhage management',
        'Pap smear and IUCD insertion',
        'Gynaecology examination',
        'Manual vacuum aspiration'
      ],
      duration: '4 hours (Afternoon session)',
      prerequisites: 'Medical students',
      capacity: 'N/A',
      date: '09/10/25',
      time: 'Afternoon'
    },
    {
      id: 'codewild',
      title: 'CODE WILD • Wilderness Medicine',
      icon: Brain,
      color: 'green',
      description: 'Wilderness medicine skills for emergencies in remote environments. Interactive simulations and hands-on challenges.',
      details: [
        'Wilderness medicine principles for remote environments',
        'Improvised splinting using natural materials',
        'Hemorrhage control: tourniquets and pressure dressing',
        'Heat stroke, hypothermia, dehydration management',
        'Identification and first aid for envenomation',
        'Snakebite management simulation',
        'Navigation and rescue signaling',
        'Search and rescue triage',
        'Survival kit essentials and emergency preparedness'
      ],
      duration: '8:00 AM to 4:00 PM (Full day session)',
      prerequisites: 'Medical students',
      capacity: 'N/A',
      date: '09/10/25',
      time: 'Full day'
    },
    {
      id: 'occulex',
      title: 'OCCULEX • Ophthalmology Workshop',
      icon: Microscope,
      color: 'blue',
      description: 'Essentials of eye care, prevalent eye conditions, and latest developments in ophthalmology. Theory and demonstrations.',
      details: [
        'Visual and pupillary pathways and reflexes',
        'Cataract surgeries (video demonstration)',
        'A Scan and Keratometry',
        'B scan and UBM',
        'Direct and indirect ophthalmoscopy',
        'Retinoscopy',
        'Conjunctival and corneal foreign body removal',
        'Sub-conjunctival, peri-bulbar, retrobulbar injections',
        'Syringing of the nasolacrimal duct',
        'Corneo-scleral button removal for corneal transplantation'
      ],
      duration: '4 hours (Forenoon session)',
      prerequisites: 'Medical students',
      capacity: 'N/A',
      date: '11/10/25',
      time: 'Forenoon'
    },
    {
      id: 'sonicshift',
      title: 'THE SONIC SHIFT • Basic Anaesthesiology Workshop',
      icon: Stethoscope,
      color: 'purple',
      description: 'Point-of-Care Ultrasound (POCUS) in anesthesia and critical care. Hands-on exposure to ultrasound techniques.',
      details: [
        'Knobology and understanding of ultrasound machines',
        'Ultrasonographic evaluation of blunt trauma abdomen',
        'Ultrasound guided evaluation of breathlessness',
        'Tips and tricks in thoracic ultrasound',
        'Interactive video-based learning sessions'
      ],
      duration: '8:00 AM to 4:00 PM (Thursday)',
      prerequisites: 'Medical students',
      capacity: 'N/A',
      date: '09/10/25',
      time: 'Full day'
    },
    {
      id: 'anastamos',
      title: 'ANASTAMOS • Basic Suturing Skills',
      icon: Plus,
      color: 'teal',
      description: 'Suturing techniques, hand knotting, and operation theatre etiquette. Personal suturing kit provided.',
      details: [
        'Universal precaution',
        'Operation theatre etiquette',
        'Patient preparation',
        'Hand scrubbing',
        'Gowning and gloving techniques',
        'Basic suturing skills',
        'Suturing',
        'Hand knotting techniques'
      ],
      duration: '4 hours (Forenoon session)',
      prerequisites: 'Medical students',
      capacity: 'N/A',
      date: '10/10/25',
      time: 'Forenoon'
    },
    {
      id: 'reviva',
      title: 'REVIVA • Neonatology Resuscitation Practices',
      icon: Heart,
      color: 'orange',
      description: 'Neonatal resuscitation, routine newborn care, and positive pressure resuscitation.',
      details: [
        'Basic NRP',
        'Routine care of newborn and preparation of birth',
        'Initial steps of care',
        'Brief ventilation',
        'Chest compressions (cardiac arrest)',
        'Prolonged ventilation – positive pressure resuscitation',
        'Endotracheal tube intubation'
      ],
      duration: '4 hours (Afternoon session)',
      prerequisites: 'Medical students',
      capacity: 'N/A',
      date: '10/10/25',
      time: 'Afternoon'
    },
    {
      id: 'smartai',
      title: 'SMART • AI for Research',
      icon: Brain,
      color: 'cyan',
      description: 'AI tools for research proposal writing, literature review, data analysis, and academic writing.',
      details: [
        'Prompt engineering in protocol writing',
        'Brainstorming research questions & objectives',
        'Turbocharging literature review',
        'Crafting robust methodology',
        'Creating questionnaires, proformas, consent forms',
        'Data analysis & visualization',
        'Review and discussion writing',
        'Writing references from scratch',
        'AI content detection & management'
      ],
      duration: '8:00 AM to 4:00 PM (Full day session)',
      prerequisites: 'Medical students',
      capacity: 'N/A',
      date: '10/10/25',
      time: 'Full day'
    },
    {
      id: 'exodontiax',
      title: "EXODONTIA'X • Dental Workshop",
      icon: Plus,
      color: 'pink',
      description: 'Emergency protocols in dental clinics, BLS, and handling medical emergencies during dental procedures.',
      details: [
        'Identifying medical emergencies in dental settings',
        'Managing syncope, hypoglycemia, chest pain',
        'Using emergency drugs and clinical equipment',
        'Performing basic life support (BLS)',
        'Managing airway emergencies',
        'Handling emergency medication kits',
        'Responding to medical collapse during procedures',
        'Solving practical challenges in emergency scenarios'
      ],
      duration: '4 hours (Forenoon session)',
      prerequisites: 'Dental students',
      capacity: 'N/A',
      date: '11/10/25',
      time: 'Forenoon'
    },
    {
      id: 'paramatrix',
      title: 'PARAMATRIX • Paramedical Workshop',
      icon: Heart,
      color: 'green',
      description: 'Emergency protocols for paramedical students, drug identification, crash cart management, and teamwork.',
      details: [
        'Drug identification skills',
        'Crash cart medication knowledge and handling',
        'Infusion preparation and rate calculation',
        'Emergency drug box organization',
        'High alert medication safety practices',
        'Scenario-based emergency medication administration',
        'Hands-on clinical skills at rotating stations',
        'Team and communication in emergencies',
        'Professional development and knowledge retention'
      ],
      duration: '4 hours (Forenoon session)',
      prerequisites: 'Paramedical students',
      capacity: 'N/A',
      date: '11/10/25',
      time: 'Forenoon'
    }
  ];

  // [Rest of the component code remains the same]
  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      red: 'from-red-500/20 to-red-600/20 border-red-400/30 text-red-300',
      pink: 'from-pink-500/20 to-pink-600/20 border-pink-400/30 text-pink-300',
      green: 'from-green-500/20 to-green-600/20 border-green-400/30 text-green-300',
      blue: 'from-blue-500/20 to-blue-600/20 border-blue-400/30 text-blue-300',
      purple: 'from-purple-500/20 to-purple-600/20 border-purple-400/30 text-purple-300',
      teal: 'from-teal-500/20 to-teal-600/20 border-teal-400/30 text-teal-300',
      orange: 'from-orange-500/20 to-orange-600/20 border-orange-400/30 text-orange-300',
      cyan: 'from-cyan-500/20 to-cyan-600/20 border-cyan-400/30 text-cyan-300'
    };
    return colors[color];
  };

  // [Groups and rendering code remains the same]
  const groups = [
    {
      id: "clinical",
      icon: Stethoscope,
      name: "Clinical Skills",
      color: "from-cyan-400 to-blue-400",
      workshops: workshops.filter(w =>
        ["anastamos", "sonicshift", "occulex", "exodontiax"].includes(w.id)
      ),
    },
    {
      id: "diagnostic",
      icon: Brain,
      name: "Diagnostic & Imaging",
      color: "from-purple-400 to-blue-400",
      workshops: workshops.filter(w =>
        ["sonostrike"].includes(w.id)
      ),
    },
    {
      id: "maternal",
      icon: HeartPulse,
      name: "Maternal & Neonatal Care",
      color: "from-pink-400 to-orange-300",
      workshops: workshops.filter(w =>
        ["vivantia", "reviva"].includes(w.id)
      ),
    },
    {
      id: "emergency",
      icon: AlertTriangle,
      name: "Emergency & Wilderness Medicine",
      color: "from-red-400 to-emerald-400",
      workshops: workshops.filter(w =>
        ["disaster-x", "codewild", "paramatrix"].includes(w.id)
      ),
    },
    {
      id: "tech",
      icon: Cpu,
      name: "Tech & Research",
      color: "from-fuchsia-400 to-cyan-400",
      workshops: workshops.filter(w =>
        ["smartai"].includes(w.id)
      ),
    },
  ];

  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  // Main page: show group cards
  if (!activeGroup) {
    return (
      <>
        <Helmet>
          <title>Workshops | IGMC Sigma</title>
          <meta name="description" content="Discover hands-on medical workshops at IGMC Sigma Striatum 3.0. Enhance your clinical, diagnostic, emergency, and research skills with expert-led sessions." />
          <meta name="keywords" content="IGMC Sigma workshops, medical workshops, clinical skills, diagnostic, emergency, research, Striatum 3.0, IGMCRI, medical college workshops" />
          <meta property="og:title" content="Workshops | IGMC Sigma" />
          <meta property="og:description" content="Discover hands-on medical workshops at IGMC Sigma Striatum 3.0. Enhance your clinical, diagnostic, emergency, and research skills with expert-led sessions." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://igmcrisigma.com/workshops" />
          <meta property="og:site_name" content="IGMCRI Sigma" />
          <meta property="og:image" content="https://igmcrisigma.com/src/images/stratium.png" />
          <link rel="canonical" href="https://igmcrisigma.com/workshops" />
        </Helmet>
        <div className="min-h-screen pt-8 pb-24 px-2 sm:px-6 relative overflow-x-hidden">
          <div
            className="pointer-events-none fixed inset-0 z-0"
            aria-hidden="true"
            style={{
              background:
                "repeating-linear-gradient(90deg,rgba(80,255,255,0.04) 0 1px,transparent 1px 32px),repeating-linear-gradient(180deg,rgba(80,255,255,0.04) 0 1px,transparent 1px 32px)",
              maskImage:
                "radial-gradient(circle at 50% 30%,rgba(255,255,255,0.18) 60%,transparent 100%)",
            }}
          />
          <svg className="pointer-events-none fixed left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2" width="600" height="600" style={{opacity:0.08}} aria-hidden="true">
            <ellipse cx="300" cy="300" rx="220" ry="80" fill="none" stroke="#00fff7" strokeWidth="2"/>
            <ellipse cx="300" cy="300" rx="140" ry="220" fill="none" stroke="#b388ff" strokeWidth="2"/>
          </svg>
          <h2 
            className="relative z-10 text-3xl font-bold text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4"
            style={{
              filter: "drop-shadow(0 0 8px rgba(0,255,255,0.3)) drop-shadow(0 0 2px rgba(255,255,255,0.3))"
            }}
          >
            CORTEX CRAFTS
          </h2>
          <p className="relative z-10 text-center text-gray-400 mb-8 max-w-2xl mx-auto">
            Hands-on workshops designed to enhance your practical medical skills and knowledge
          </p>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 relative z-10">
            {groups.map(group => {
              const GroupIcon = group.icon;
              return (
                <button
                  key={group.id}
                  onClick={() => setActiveGroup(group.id)}
                  className={`
                    relative group flex items-center justify-between overflow-hidden
                    rounded-2xl p-5 min-h-[120px] bg-white/10 backdrop-blur-md
                    border border-white/20 shadow-[0_0_24px_2px_rgba(0,255,255,0.08)]
                    transition-all duration-200
                    hover:scale-[1.04] hover:shadow-[0_0_32px_4px_rgba(0,255,255,0.25)]
                    hover:border-cyan-400/60
                    before:absolute before:inset-0 before:rounded-2xl
                    before:pointer-events-none
                    before:border-2 before:border-transparent
                    before:transition-all before:duration-200
                    hover:before:border-cyan-400/80
                  `}
                  style={{
                    boxShadow:
                      "0 0 24px 2px rgba(0,255,255,0.10), 0 2px 24px 0 rgba(180,0,255,0.10)",
                    background:
                      "linear-gradient(135deg, rgba(30,30,60,0.55) 60%, rgba(60,0,80,0.35) 100%)",
                  }}
                >
                  <span
                    className={`
                      flex items-center justify-center mr-4 min-w-[56px] min-h-[56px]
                      rounded-xl bg-gradient-to-br ${group.color}
                      border border-white/20
                      shadow-[0_0_24px_4px_rgba(0,255,255,0.18)]
                    `}
                    style={{
                      filter: "drop-shadow(0 0 8px #0ff8) drop-shadow(0 0 2px #fff8)",
                    }}
                  >
                    <GroupIcon size={32} strokeWidth={2.5} className="text-white drop-shadow-[0_0_4px_cyan]" />
                  </span>
                  <div className="flex-1 flex flex-col items-start">
                    <span className="font-extrabold text-base md:text-lg uppercase tracking-wide text-white">
                      {group.name}
                    </span>
                    <span className="text-xs mt-1 text-white/60 font-medium">{group.workshops.length} Workshops</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  // Detail page: show workshops in the selected group
  const group = groups.find(g => g.id === activeGroup)!;
  return (
    <div className="min-h-screen pt-8 pb-24 px-2 sm:px-6 relative overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "repeating-linear-gradient(90deg,rgba(80,255,255,0.04) 0 1px,transparent 1px 32px),repeating-linear-gradient(180deg,rgba(80,255,255,0.04) 0 1px,transparent 1px 32px)",
          maskImage:
            "radial-gradient(circle at 50% 30%,rgba(255,255,255,0.18) 60%,transparent 100%)",
        }}
      />
      <button
        onClick={() => setActiveGroup(null)}
        className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2"
      >
        <span className="text-lg">&#8592;</span>
        <span>Back to Workshops</span>
      </button>
      <div className="mb-8 flex flex-col items-center">
        <h2 
          className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent text-center mb-1" 
          style={{
            letterSpacing: "0.06em",
            filter: "drop-shadow(0 0 8px rgba(0,255,255,0.3)) drop-shadow(0 0 2px rgba(255,255,255,0.3))"
          }}
        >
          {group.name}
        </h2>
        <div className="text-sm md:text-base text-white/70 font-medium text-center">
          {group.id === "clinical"
            ? "Workshops focused on hands-on clinical skills and procedures."
            : group.id === "maternal"
            ? "Maternal and neonatal care workshops for all levels."
            : group.id === "emergency"
            ? "Emergency response and wilderness medicine workshops."
            : "Technology and research workshops for the future of medicine."}
        </div>
      </div>
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {group.workshops.map(workshop => {
          const Icon = workshop.icon;
          return (
            <Link
              key={workshop.id}
              to={`/workshops/${workshop.id}`}
              className={`
                relative group flex items-center justify-between overflow-hidden
                rounded-2xl p-5 min-h-[120px] bg-white/10 backdrop-blur-md
                border border-white/20 shadow-[0_0_24px_2px_rgba(0,255,255,0.08)]
                transition-all duration-200
                hover:scale-[1.04] hover:shadow-[0_0_32px_4px_rgba(0,255,255,0.25)]
                hover:border-cyan-400/60
                before:absolute before:inset-0 before:rounded-2xl
                before:pointer-events-none
                before:border-2 before:border-transparent
                before:transition-all before:duration-200
                hover:before:border-cyan-400/80
              `}
              style={{
                boxShadow:
                  "0 0 24px 2px rgba(0,255,255,0.10), 0 2px 24px 0 rgba(180,0,255,0.10)",
                background:
                  "linear-gradient(135deg, rgba(30,30,60,0.55) 60%, rgba(60,0,80,0.35) 100%)",
              }}
            >
              <span
                className={`
                  flex items-center justify-center mr-4 min-w-[56px] min-h-[56px]
                  rounded-xl bg-gradient-to-br ${getColorClasses(workshop.color)}
                  border border-white/20
                `}
              >
                <Icon size={32} strokeWidth={2.5} className="text-white" />
              </span>
              <div className="flex-1 flex flex-col items-start">
                {workshop.title.includes("•") ? (
                  <div className="w-full flex flex-col items-center text-center">
                    <span 
                      className="font-extrabold text-base md:text-lg uppercase tracking-wide text-cyan-300"
                      style={{
                        filter: "drop-shadow(0 0 6px rgba(0,255,255,0.3))"
                      }}
                    >
                      {workshop.title.split("•")[0].trim()}
                    </span>
                    <span className="font-extrabold text-base md:text-lg uppercase tracking-wide text-white/90">
                      {workshop.title.split("•")[1].trim()}
                    </span>
                    <span className="text-xs mt-1 text-white/60 font-medium">{workshop.description}</span>
                  </div>
                ) : (
                  <>
                    <span className="font-extrabold text-base md:text-lg uppercase tracking-wide text-white/90 w-full text-center block">
                      {workshop.title}
                    </span>
                    <span className="text-xs mt-1 text-white/60 font-medium">{workshop.description}</span>
                  </>
                )}
              </div>
            </Link>
          );
        })}
      </div>
      <RegistrationDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </div>
  );
};

export default WorkshopsSection;
