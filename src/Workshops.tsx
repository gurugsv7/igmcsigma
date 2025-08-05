import React, { useState } from "react";
import { Stethoscope, Heart, Brain, Microscope, Plus, Users, BookOpen, Clock, HeartPulse, AlertTriangle, Cpu, X } from "lucide-react";

// Dialog Component
const RegistrationDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      {/* Backdrop with blur */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Dialog Content */}
      <div 
        className="relative bg-gradient-to-b from-gray-900/90 to-gray-800/90 rounded-2xl p-6 max-w-sm w-full backdrop-blur-xl border-2 border-cyan-500/20 shadow-[0_0_25px_-5px_rgba(0,255,255,0.3)]"
        style={{
          boxShadow: "0 8px 32px -4px rgba(0,255,255,0.2), 0 4px 16px -2px rgba(180,0,255,0.15)"
        }}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Content */}
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
              onClick={() => setIsDialogOpen(true)}
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
      <RegistrationDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </div>
  );
};

export default WorkshopsSection;
