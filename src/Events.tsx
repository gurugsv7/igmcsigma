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
      <div className={`bg-gradient-to-r ${getColorClasses(section.color)} border rounded-lg p-6 mb-8 flex items-center space-x-3`}>
        <Icon size={28} />
        <h2 className="text-2xl font-bold">{section.title}</h2>
      </div>
      <div className="space-y-6 max-w-3xl mx-auto">
        {section.events.map((event, idx) => (
          <div key={idx} className="bg-black/20 rounded-lg p-6 shadow hover:bg-black/30 transition-colors">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <button
                onClick={() => {
                  setRegistrationItem(event);
                  setRegistrationType('event');
                  setShowRegistration(true);
                }}
                className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 text-cyan-300 px-4 py-1 rounded-full text-sm hover:border-cyan-400/50 transition-all"
              >
                Register
              </button>
            </div>
            <p className="text-sm text-gray-400 mb-1">{event.description}</p>
            <p className="text-sm text-gray-300">{event.details}</p>
          </div>
        ))}
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
          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`bg-gradient-to-r ${getColorClasses(section.color)} border rounded-xl p-6 flex flex-col items-center space-y-3 shadow-lg hover:scale-105 transition-transform`}
            >
              <Icon size={40} />
              <span className="font-semibold text-lg text-center">{section.title}</span>
              <span className="text-xs text-gray-400">{section.events.length} events</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EventSection;
