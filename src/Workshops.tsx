import React, { useState } from "react";
import { Stethoscope, Heart, Brain, Microscope, Plus, Users, BookOpen, Clock, HeartPulse, AlertTriangle, Cpu } from "lucide-react";

interface WorkshopsSectionProps {
  setRegistrationItem: (item: any) => void;
  setRegistrationType: (type: string) => void;
  setShowRegistration: (show: boolean) => void;
}

const WorkshopsSection = ({
  setRegistrationItem,
  setRegistrationType,
  setShowRegistration
}: WorkshopsSectionProps) => {
  const [activeWorkshop, setActiveWorkshop] = useState<string | null>(null);

  const workshops = [
    {
      id: 'radiology',
      title: 'Radiology Workshop',
      icon: Brain,
      color: 'blue',
      description: 'Comprehensive training in radiological imaging and interpretation.',
      details: [
        'Basic radiological principles',
        'X-ray interpretation',
        'CT and MRI basics',
        'Common radiological findings',
        'Emergency radiology essentials'
      ],
      duration: '4 hours',
      prerequisites: 'Medical students (2nd year+)',
      capacity: '40 participants',
      date: '09/10/25',
      time: 'Forenoon'
    },
    {
      id: 'disaster-x',
      title: 'Disaster Management: Disaster X',
      icon: Stethoscope,
      color: 'red',
      description: 'Comprehensive training on emergency response and disaster management protocols.',
      details: [
        'Mass casualty incident management',
        'Triage protocols and decision making',
        'Emergency medical response coordination',
        'Psychological first aid techniques',
        'Resource allocation in crisis situations'
      ],
      duration: '4 hours',
      prerequisites: 'Basic medical knowledge',
      capacity: '50 participants',
      date: '10/10/25',
      time: 'Evening'
    },
    {
      id: 'obstetrics',
      title: 'Obstetrics Workshop',
      icon: Heart,
      color: 'pink',
      description: 'Hands-on training in obstetric procedures and maternal care.',
      details: [
        'Normal delivery procedures',
        'Emergency obstetric care',
        'Neonatal resuscitation basics',
        'Postpartum care protocols',
        'High-risk pregnancy management'
      ],
      duration: '6 hours',
      prerequisites: 'Medical students (3rd year+)',
      capacity: '30 participants',
      date: '09/10/25',
      time: 'Afternoon'
    },
    {
      id: 'code-wild',
      title: 'Wilderness Medicine: CODE WILD',
      icon: Brain,
      color: 'green',
      description: 'Medical care in remote and challenging environments.',
      details: [
        'Remote area medical assessment',
        'Improvised medical equipment usage',
        'Environmental injury management',
        'Evacuation procedures',
        'Survival medicine techniques'
      ],
      duration: '5 hours',
      prerequisites: 'Open to all medical students',
      capacity: '40 participants',
      date: '09/10/25',
      time: 'Evening'
    },
    {
      id: 'ophthalmology',
      title: 'Ophthalmology Workshop',
      icon: Microscope,
      color: 'blue',
      description: 'Eye examination techniques and common ophthalmic procedures.',
      details: [
        'Fundoscopy and slit lamp examination',
        'Visual field testing',
        'Common eye emergency management',
        'Refractive error assessment',
        'Basic surgical techniques'
      ],
      duration: '4 hours',
      prerequisites: 'Medical students (2nd year+)',
      capacity: '25 participants',
      date: '11/10/25',
      time: 'Forenoon'
    },
    {
      id: 'sonic-shift',
      title: 'Basic Anesthesiology: The Sonic Shift',
      icon: Stethoscope,
      color: 'purple',
      description: 'Introduction to anesthesia principles and airway management.',
      details: [
        'Airway assessment and management',
        'Basic anesthesia monitoring',
        'Local anesthesia techniques',
        'Pain management principles',
        'Emergency airway procedures'
      ],
      duration: '5 hours',
      prerequisites: 'Medical students (4th year+)',
      capacity: '35 participants',
      date: '09/10/25',
      time: 'Evening'
    },
    {
      id: 'suturing',
      title: 'Basic Suturing Skills',
      icon: Plus,
      color: 'teal',
      description: 'Fundamental wound closure and suturing techniques.',
      details: [
        'Wound assessment and preparation',
        'Various suturing techniques',
        'Knot tying and instrument handling',
        'Wound care and follow-up',
        'Complications and management'
      ],
      duration: '3 hours',
      prerequisites: 'Open to all medical students',
      capacity: '60 participants',
      date: '10/10/25',
      time: 'Forenoon'
    },
    {
      id: 'neonatology',
      title: 'Neonatology Resuscitation Practices',
      icon: Heart,
      color: 'orange',
      description: 'Newborn resuscitation and critical care procedures.',
      details: [
        'Neonatal assessment techniques',
        'Resuscitation algorithms',
        'Airway management in newborns',
        'Medication administration',
        'Family communication skills'
      ],
      duration: '4 hours',
      prerequisites: 'Medical students (3rd year+)',
      capacity: '30 participants',
      date: '10/10/25',
      time: 'Afternoon'
    },
    {
      id: 'ai-research',
      title: 'Role of Computational AI for Research',
      icon: Brain,
      color: 'cyan',
      description: 'AI applications in medical research and clinical practice.',
      details: [
        'Introduction to medical AI',
        'Data analysis and interpretation',
        'Machine learning in diagnostics',
        'Research methodology with AI',
        'Ethical considerations in AI'
      ],
      duration: '3 hours',
      prerequisites: 'Basic computer knowledge',
      capacity: '45 participants',
      date: '10/10/25',
      time: 'Evening'
    },
    {
      id: 'dental',
      title: 'Dental Workshop',
      icon: Plus,
      color: 'pink',
      description: 'Basic dental procedures and oral health care.',
      details: [
        'Dental examination techniques',
        'Basic dental procedures',
        'Oral hygiene practices',
        'Common dental emergencies',
        'Preventive dentistry'
      ],
      duration: '3 hours',
      prerequisites: 'Open to all medical students',
      capacity: '30 participants',
      date: '11/10/25',
      time: 'Evening'
    },
    {
      id: 'paramedical',
      title: 'Paramedical Workshop',
      icon: Heart,
      color: 'green',
      description: 'Essential paramedical skills and emergency care.',
      details: [
        'Basic life support',
        'Patient assessment',
        'Emergency response protocols',
        'Medical equipment handling',
        'Patient transport techniques'
      ],
      duration: '4 hours',
      prerequisites: 'Open to all medical students',
      capacity: '35 participants',
      date: '11/10/25',
      time: 'Evening'
    }
  ];

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

  const handleRegister = (workshop: any) => {
    setRegistrationItem(workshop);
    setRegistrationType('workshop');
    setShowRegistration(true);
  };

  if (activeWorkshop) {
    const workshop = workshops.find(w => w.id === activeWorkshop)!;
    const Icon = workshop.icon;
    return (
      <div className="min-h-screen pt-8 pb-24 px-6">
        <button
          onClick={() => setActiveWorkshop(null)}
          className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2"
        >
          <span className="text-lg">&#8592;</span>
          <span>Back to Workshops</span>
        </button>
        <div className="mb-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent text-center mb-1" style={{letterSpacing: "0.06em"}}>
            {workshop.title}
          </h2>
          <div className="text-sm md:text-base text-white/70 font-medium text-center">
            {workshop.description}
          </div>
        </div>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div
            className={`
              relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl
              border-2 border-cyan-400/40
              transition-all duration-200
              flex flex-col
              before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none
              before:shadow-[inset_0_2px_24px_0_rgba(0,255,255,0.10)]
            `}
            style={{
              boxShadow: "0 4px 32px 0 rgba(0,255,255,0.08), 0 2px 24px 0 rgba(180,0,255,0.10) inset",
            }}
          >
            {/* Title */}
            <h3 className="font-extrabold text-lg md:text-xl uppercase tracking-wide mb-2 text-cyan-200" style={{
              textShadow: "0 0 8px #0ff8, 0 0 2px #fff8",
              letterSpacing: "0.04em",
            }}>
              <span className="inline-flex items-center gap-2">
                <Icon size={22} className="inline-block" />
                {workshop.title}
              </span>
            </h3>
            {/* Workshop Content */}
            <div className="mb-3">
              <ul className="list-disc list-inside text-sm text-white/70 mb-1 leading-relaxed pl-2">
                {workshop.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-200 text-xs">
                  <Clock size={14} /> {workshop.duration}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-teal-900/30 text-teal-200 text-xs">
                  <Users size={14} /> {workshop.capacity}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-900/30 text-purple-200 text-xs">
                  <BookOpen size={14} /> {workshop.prerequisites}
                </span>
              </div>
              <div className="flex gap-4 mt-3">
                <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30">
                  <p className="text-xs text-cyan-300">📅 {workshop.date}</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30">
                  <p className="text-xs text-purple-300">⏰ {workshop.time}</p>
                </div>
              </div>
            </div>
            {/* CTA Button */}
            <button
              disabled
              className={`
                flex items-center justify-center gap-2 px-5 py-2 rounded-full
                border-2 border-gray-500/60 text-gray-400 font-bold text-sm
                bg-white/5 backdrop-blur-md
                shadow-[0_0_12px_2px_rgba(0,255,255,0.05)]
                cursor-not-allowed
              `}
            >
              <span role="img" aria-label="register">⏳</span>
              Registration Soon
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Group workshops by theme with Lucide icons
  const groups = [
    {
      id: "clinical",
      icon: Stethoscope,
      name: "Clinical Skills",
      color: "from-cyan-400 to-blue-400",
      workshops: workshops.filter(w =>
        ["suturing", "sonic-shift", "ophthalmology", "dental"].includes(w.id)
      ),
    },
    {
      id: "diagnostic",
      icon: Brain,
      name: "Diagnostic & Imaging",
      color: "from-purple-400 to-blue-400",
      workshops: workshops.filter(w =>
        ["radiology"].includes(w.id)
      ),
    },
    {
      id: "maternal",
      icon: HeartPulse,
      name: "Maternal & Neonatal Care",
      color: "from-pink-400 to-orange-300",
      workshops: workshops.filter(w =>
        ["obstetrics", "neonatology"].includes(w.id)
      ),
    },
    {
      id: "emergency",
      icon: AlertTriangle,
      name: "Emergency & Wilderness Medicine",
      color: "from-red-400 to-emerald-400",
      workshops: workshops.filter(w =>
        ["disaster-x", "code-wild", "paramedical"].includes(w.id)
      ),
    },
    {
      id: "tech",
      icon: Cpu,
      name: "Tech & Research",
      color: "from-fuchsia-400 to-cyan-400",
      workshops: workshops.filter(w =>
        ["ai-research"].includes(w.id)
      ),
    },
  ];

  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  // Main page: show group cards
  if (!activeGroup) {
    return (
      <div className="min-h-screen pt-8 pb-24 px-2 sm:px-6 relative overflow-x-hidden">
        {/* Sci-fi grid + faint orbit lines */}
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
        {/* Faint orbit lines */}
        <svg className="pointer-events-none fixed left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2" width="600" height="600" style={{opacity:0.08}} aria-hidden="true">
          <ellipse cx="300" cy="300" rx="220" ry="80" fill="none" stroke="#00fff7" strokeWidth="2"/>
          <ellipse cx="300" cy="300" rx="140" ry="220" fill="none" stroke="#b388ff" strokeWidth="2"/>
        </svg>
        <h2 className="relative z-10 text-3xl font-bold text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">
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
                {/* Unique icon left */}
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
                {/* Right stack */}
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
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent text-center mb-1" style={{letterSpacing: "0.06em"}}>
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
            <button
              key={workshop.id}
              onClick={() => setActiveWorkshop(workshop.id)}
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
              {/* Icon left */}
              <span
                className={`
                  flex items-center justify-center mr-4 min-w-[56px] min-h-[56px]
                  rounded-xl bg-gradient-to-br ${getColorClasses(workshop.color)}
                  border border-white/20
                `}
              >
                <Icon size={32} strokeWidth={2.5} className="text-white" />
              </span>
              {/* Right stack */}
              <div className="flex-1 flex flex-col items-start">
                <span className="font-extrabold text-base md:text-lg uppercase tracking-wide text-white">
                  {workshop.title}
                </span>
                <span className="text-xs mt-1 text-white/60 font-medium">{workshop.description}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WorkshopsSection;
