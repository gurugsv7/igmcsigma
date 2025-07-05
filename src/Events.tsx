import React, { useState } from "react";
import { Award, MessageSquare, Microscope, Plus } from "lucide-react";

interface EventSectionProps {
  setRegistrationItem: (item: any) => void;
  setRegistrationType: (type: string) => void;
  setShowRegistration: (show: boolean) => void;
}

const eventSections = [
  {
    id: 'quizzes',
    title: 'QUIZZES – STRIATUM SCHOLAR TROPHY',
    icon: Award,
    color: 'purple',
    events: [
      {
        title: 'Senior Quiz',
        description: 'Advanced medical quiz for final year students and interns',
        details: 'Comprehensive quiz covering all medical subjects with focus on clinical scenarios'
      },
      {
        title: 'Junior Quiz',
        description: 'Medical quiz for 1st to 3rd year students',
        details: 'Foundation medical knowledge quiz covering basic sciences and early clinical subjects'
      },
      {
        title: 'Online Quiz',
        description: 'Open quiz for all participants',
        details: 'General medical knowledge quiz accessible to all registered participants'
      }
    ]
  },
  {
    id: 'panels',
    title: 'PANEL DISCUSSIONS – FIRING LINE: THE EXPERT CIRCUIT',
    icon: MessageSquare,
    color: 'teal',
    events: [
      {
        title: 'Inside the ICU: What They Don\'t Teach You in Undergrad',
        description: 'Real-world ICU scenarios and critical care insights',
        details: 'Expert panel discussion on practical ICU management and critical decision making'
      },
      {
        title: 'The Road to Residency: USMLE, PLAB, MRCP, MRCS',
        description: 'Career guidance for international medical examinations',
        details: 'Comprehensive guidance on international medical career pathways and exam strategies'
      }
    ]
  },
  {
    id: 'presentations',
    title: 'PRESENTATIONS & OTHER SCIENTIFIC EVENTS',
    icon: Microscope,
    color: 'pink',
    events: [
      {
        title: 'Case Presentation: Case Pulse',
        description: 'Present interesting clinical cases',
        details: 'Platform for presenting unique and challenging clinical cases with expert feedback'
      },
      {
        title: 'Poster Presentation: Axon Alley',
        description: 'Research poster presentations',
        details: 'Showcase your research work through professional poster presentations'
      },
      {
        title: 'Paper Presentation: Nexus',
        description: 'Scientific paper presentations',
        details: 'Present your research papers and findings to a panel of expert judges'
      },
      {
        title: 'Body Painting: Pulsating Palettes',
        description: 'Creative medical art competition',
        details: 'Artistic representation of medical concepts through body painting'
      },
      {
        title: 'Short Film: Cineplexus',
        description: 'Medical themed short film competition',
        details: 'Create and present short films on medical themes and healthcare topics'
      }
    ]
  }
];

const getColorClasses = (color: string) => {
  const colors: { [key: string]: string } = {
    purple: 'from-purple-500/20 to-purple-600/20 border-purple-400/30 text-purple-300',
    teal: 'from-teal-500/20 to-teal-600/20 border-teal-400/30 text-teal-300',
    pink: 'from-pink-500/20 to-pink-600/20 border-pink-400/30 text-pink-300'
  };
  return colors[color];
};

const SectionPage = ({
  section,
  onBack,
  setRegistrationItem,
  setRegistrationType,
  setShowRegistration
}: {
  section: typeof eventSections[0],
  onBack: () => void,
  setRegistrationItem: (item: any) => void,
  setRegistrationType: (type: string) => void,
  setShowRegistration: (show: boolean) => void
}) => {
  const Icon = section.icon;
  return (
    <div className="min-h-screen pt-8 pb-24 px-6">
      <button
        onClick={onBack}
        className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2"
      >
        <span className="text-lg">&#8592;</span>
        <span>Back to Events</span>
      </button>
      {/* Header with animated orbit lines and summary */}
      <div className="mb-8 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent text-center mb-1" style={{letterSpacing: "0.06em"}}>
          {section.title}
        </h2>
        <div className="text-sm md:text-base text-white/70 font-medium text-center">
          {section.id === "quizzes"
            ? "Showcasing sharp minds across medical quiz formats."
            : section.id === "panels"
            ? "Expert discussions on critical care and career pathways."
            : "Present, create, and compete in scientific and creative events."}
        </div>
      </div>
      {/* Sub-event cards */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {section.events.map((event, idx) => {
          // Color coding and label for quizzes
          let border = "border-cyan-400/40", pill = "", pillColor = "from-cyan-500/80 to-teal-500/80", titleGlow = "text-cyan-200";
          if (event.title.toLowerCase().includes("senior")) {
            border = "border-teal-400/60";
            pill = "Senior Level";
            pillColor = "from-teal-400 to-cyan-400";
            titleGlow = "text-teal-200";
          } else if (event.title.toLowerCase().includes("junior")) {
            border = "border-purple-400/60";
            pill = "Junior Level";
            pillColor = "from-purple-400 to-pink-400";
            titleGlow = "text-purple-200";
          } else if (event.title.toLowerCase().includes("online")) {
            border = "border-blue-400/60";
            pill = "Open Level";
            pillColor = "from-blue-400 to-cyan-400";
            titleGlow = "text-blue-200";
          }
          return (
            <div
              key={idx}
              className={`
                relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl
                border-2 ${border}
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
              <h3 className={`font-extrabold text-lg md:text-xl uppercase tracking-wide mb-2 ${titleGlow}`} style={{
                textShadow: "0 0 8px #0ff8, 0 0 2px #fff8",
                letterSpacing: "0.04em",
              }}>
                {event.title}
              </h3>
              {/* Description split */}
              <div className="mb-3">
                <p className="text-sm text-white/70 mb-1 leading-relaxed">{event.description}</p>
                <p className="text-sm text-white/60 leading-relaxed">{event.details}</p>
              </div>
              {/* CTA Button */}
              <button
                onClick={() => {
                  setRegistrationItem(event);
                  setRegistrationType('event');
                  setShowRegistration(true);
                }}
                className={`
                  flex items-center justify-center gap-2 px-5 py-2 rounded-full
                  border-2 border-cyan-400/60 text-cyan-200 font-bold text-sm
                  bg-white/10 backdrop-blur-md
                  shadow-[0_0_12px_2px_rgba(0,255,255,0.10)]
                  transition-all duration-200
                  hover:scale-105 hover:shadow-[0_0_24px_4px_rgba(0,255,255,0.18)]
                  hover:border-cyan-300/90
                  active:scale-95
                  focus:outline-none
                `}
                style={{
                  boxShadow: "0 0 12px 2px rgba(0,255,255,0.10)",
                }}
              >
                <span role="img" aria-label="register">📝</span>
                Register
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const EventSection = ({
  setRegistrationItem,
  setRegistrationType,
  setShowRegistration
}: EventSectionProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  if (activeSection) {
    const section = eventSections.find(s => s.id === activeSection)!;
    return (
      <SectionPage
        section={section}
        onBack={() => setActiveSection(null)}
        setRegistrationItem={setRegistrationItem}
        setRegistrationType={setRegistrationType}
        setShowRegistration={setShowRegistration}
      />
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-24 px-6">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-8">
        Events & Competitions
      </h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
        {eventSections.map((section) => {
          const Icon = section.icon;
          // Badge emoji by category
          const badge = section.id === "quizzes"
            ? "🧠 Quiz"
            : section.id === "panels"
            ? "💬 Panel"
            : "🧪 Other";
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
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
              {/* Neon-glass icon left */}
              <span
                className={`
                  flex items-center justify-center mr-4 min-w-[56px] min-h-[56px]
                  rounded-xl bg-gradient-to-br ${section.color === "purple"
                    ? "from-purple-500 via-pink-500 to-cyan-400"
                    : section.color === "teal"
                    ? "from-teal-400 via-cyan-400 to-blue-400"
                    : "from-pink-400 via-fuchsia-500 to-yellow-300"}
                  shadow-[0_0_24px_4px_rgba(0,255,255,0.18)]
                  border border-white/20
                `}
                style={{
                  filter: "drop-shadow(0 0 8px #0ff8) drop-shadow(0 0 2px #fff8)",
                }}
              >
                <Icon size={32} strokeWidth={2.5} className="text-white drop-shadow-[0_0_4px_cyan]" />
              </span>
              {/* Right stack */}
              <div className="flex-1 flex flex-col items-start">
                <span className="font-extrabold text-base md:text-lg uppercase tracking-wide text-white drop-shadow-[0_1px_4px_rgba(0,255,255,0.12)]">
                  {section.title}
                </span>
                <span className="text-xs mt-1 text-white/60 font-medium">{section.events.length} Events</span>
              </div>
              {/* Glow pulse animation */}
              <style>
                {`
                  .group:hover, .group:focus-visible {
                    animation: glowPulse 0.7s cubic-bezier(.4,0,.2,1);
                  }
                  @keyframes glowPulse {
                    0% { box-shadow: 0 0 24px 2px rgba(0,255,255,0.10), 0 2px 24px 0 rgba(180,0,255,0.10);}
                    60% { box-shadow: 0 0 48px 8px rgba(0,255,255,0.30), 0 2px 32px 0 rgba(180,0,255,0.18);}
                    100% { box-shadow: 0 0 24px 2px rgba(0,255,255,0.10), 0 2px 24px 0 rgba(180,0,255,0.10);}
                  }
                `}
              </style>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EventSection;
