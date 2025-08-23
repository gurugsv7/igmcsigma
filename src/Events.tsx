import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Award, MessageSquare, Microscope, Plus } from "lucide-react";
import EventDetails from "./EventDetails";

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
        description: 'Advanced quiz on Gastroenterology',
        details: 'Senior level quiz for final year students and interns focusing on gastroenterology topics',
        date: '12/10/25',
        time: 'Sunday'
      },
      {
        title: 'Junior Quiz',
        description: 'Quiz on Anatomy and Pathology',
        details: 'Junior level quiz covering foundational medical subjects - anatomy and pathology',
        date: '12/10/25',
        time: 'Sunday'
      },
      {
        title: 'Online Quiz',
        description: 'Diabetes Mellitus Quiz',
        details: 'Three-round quiz with online prelims, offline semifinals and finals',
        date: 'Prelims: 28/09/25',
        time: 'Semifinals & Finals: 12/10/25'
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
        title: 'Inside the ICU: What They Don\'t Teach You in Undergrad Medicine',
        description: 'Real-world ICU scenarios and critical care insights',
        details: 'Expert panel discussion on practical ICU management and critical decision making',
        date: '11/10/25',
        time: 'Afternoon'
      },
      {
        title: 'The Road to Residency: USMLE, UKMLE, MRCP, MRCS',
        description: 'Career guidance for international medical examinations',
        details: 'Comprehensive guidance on international medical career pathways and exam strategies',
        date: '11/10/25',
        time: 'Afternoon'
      }
    ]
  },
  {
    id: 'presentations',
    title: 'PRESENTATIONS',
    icon: Microscope,
    color: 'pink',
    events: [
      {
        title: 'Case Presentation: Case Pulse',
        description: 'Present interesting clinical cases',
        details: 'Platform for presenting unique and challenging clinical cases with expert feedback',
        date: '12/10/25',
        time: 'Sunday morning'
      },
      {
        title: 'Poster Presentation: Axon Alley',
        description: 'Research poster presentations',
        details: 'Showcase your research work through professional poster presentations',
        date: '12/10/25',
        time: 'Sunday morning'
      },
      {
        title: 'Paper Presentation: Nexus',
        description: 'Scientific paper presentations',
        details: 'Present your research papers and findings to a panel of expert judges',
        date: '12/10/25',
        time: 'Sunday morning'
      }
    ]
  },
  {
    id: 'otherevents',
    title: 'OTHER EVENTS',
    icon: Plus,
    color: 'teal',
    events: [
      {
        title: 'Body Painting: Pulsating Palettes',
        description: 'Anatomy oriented body painting competition',
        details: 'Creative artistic representation of anatomical concepts through body painting',
        date: '11/10/25',
        time: 'Saturday morning'
      },
      {
        title: 'Short Film: Cineplexus',
        description: 'Medical themed short film competition',
        details: 'Create and present short films on medical themes and healthcare topics',
        date: '11/10/25',
        time: 'Saturday morning'
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
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const Icon = section.icon;

  const handleEventSelect = (event: any) => {
    // Get the base title for EventDetails matching
    let strippedTitle = event.title;
    if (event.title.includes(":")) {
      const [first] = event.title.split(":");
      strippedTitle = first.trim();
    }
    if (event.title.includes(" - ")) {
      strippedTitle = event.title.split(" - ")[0].trim();
    }
    // Get just the main title without any subtitles
    strippedTitle = strippedTitle.split(/[\-:]/)[0].trim();
    
    setSelectedEvent({
      ...event,
      originalTitle: event.title, // keep full title for reference
      title: strippedTitle // simplified title for matching
    });
  };

  if (selectedEvent) {
    return (
      <EventDetails
        event={selectedEvent}
        onBack={() => setSelectedEvent(null)}
      />
    );
  }
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
<div className="mt-2 grid grid-cols-2 gap-2 w-full max-w-[300px]">
  <div className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center">
    <span className="mr-1.5">📅</span>
    <p className="text-xs text-cyan-300 font-medium">{event.date}</p>
  </div>
  <div className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-400/30 flex items-center">
    <span className="mr-1.5">⏰</span>
    <p className="text-xs text-purple-300 font-medium">{event.time}</p>
  </div>
</div>
              </div>
              {/* CTA Button */}
              <Link
                to={
                  event.title === "Senior Quiz" ? "/events/senior-quiz" :
                  event.title === "Junior Quiz" ? "/events/junior-quiz" :
                  event.title === "Online Quiz" ? "/events/online-quiz" :
                  event.title.startsWith("Inside the ICU") ? "/events/inside-icu" :
                  event.title.startsWith("The Road to Residency") ? "/events/road-to-residency" :
                  event.title.startsWith("Case Presentation") ? "/events/case-pulse" :
                  event.title.startsWith("Poster Presentation") ? "/events/axon-alley" :
                  event.title.startsWith("Paper Presentation") ? "/events/nexus" :
                  event.title.startsWith("Body Painting") ? "/events/pulsating-palettes" :
                  event.title.startsWith("Short Film") ? "/events/cineplexus" :
                  "#"
                }
                className={`
                  flex items-center justify-center gap-2 px-5 py-2 rounded-full
                  border-2 border-cyan-500/60 text-cyan-300 font-bold text-sm
                  bg-white/5 backdrop-blur-md hover:bg-white/10
                  shadow-[0_0_12px_2px_rgba(0,255,255,0.05)]
                  transition-all duration-200
                `}
              >
                <span role="img" aria-label="register">📝</span>
                View Details & Register
              </Link>
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

export { eventSections };
export default EventSection;
