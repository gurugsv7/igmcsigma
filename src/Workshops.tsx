import React, { useState } from "react";
import { Stethoscope, Heart, Brain, Microscope, Plus, Users, BookOpen, Clock } from "lucide-react";

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
  const [expandedWorkshop, setExpandedWorkshop] = useState<string | null>(null);

  const workshops = [
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
      capacity: '50 participants'
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
      capacity: '30 participants'
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
      capacity: '40 participants'
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
      capacity: '25 participants'
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
      capacity: '35 participants'
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
      capacity: '60 participants'
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
      capacity: '30 participants'
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
      capacity: '45 participants'
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

  return (
    <div className="min-h-screen pt-8 pb-24 px-6">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">
        CORTEX CRAFTS
      </h2>
      <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        Hands-on workshops designed to enhance your practical medical skills and knowledge
      </p>
      
      <div className="max-w-4xl mx-auto space-y-4">
        {workshops.map((workshop) => {
          const Icon = workshop.icon;
          const isExpanded = expandedWorkshop === workshop.id;
          
          return (
            <div key={workshop.id} className={`bg-gradient-to-r ${getColorClasses(workshop.color)} border rounded-lg overflow-hidden transition-all duration-300`}>
              <button
                onClick={() => setExpandedWorkshop(isExpanded ? null : (workshop.id as string))}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <Icon size={24} />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">{workshop.title}</h3>
                    <p className="text-xs opacity-75 mt-1">{workshop.description}</p>
                  </div>
                </div>
                <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}>
                  <Plus size={20} />
                </div>
              </button>
              
              {isExpanded && (
                <div className="px-4 pb-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Workshop Content:</h4>
                      <ul className="space-y-1">
                        {workshop.details.map((detail, index) => (
                          <li key={index} className="text-xs bg-black/20 rounded p-2 flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-black/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock size={14} />
                          <span className="text-xs font-medium">Duration</span>
                        </div>
                        <p className="text-sm">{workshop.duration}</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users size={14} />
                          <span className="text-xs font-medium">Capacity</span>
                        </div>
                        <p className="text-sm">{workshop.capacity}</p>
                      </div>
                      <div className="bg-black/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <BookOpen size={14} />
                          <span className="text-xs font-medium">Prerequisites</span>
                        </div>
                        <p className="text-sm">{workshop.prerequisites}</p>
                      </div>
                      <button
                        onClick={() => handleRegister(workshop)}
                        className="w-full bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 text-cyan-300 py-2 px-4 rounded-lg hover:border-cyan-400/50 transition-all duration-300 text-sm font-medium"
                      >
                        Register for Workshop
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkshopsSection;
