import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

// BuyDelegatePassButton for client-side navigation
const BuyDelegatePassButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/25"
      onClick={() => navigate('/delegate-pass')}
    >
      Buy Delegate Pass
    </button>
  );
};
import { Home, Calendar, BookOpen, Users, Phone, Heart, Plus, Brain, Stethoscope, Microscope, Award, MessageSquare, MapPin, Mail, Clock, Send, Bot, X, MessageCircle, Wrench, ArrowLeft, CheckCircle, Loader, HeartPulse, TestTube } from 'lucide-react';
import { Dna } from 'lucide-react';
import stratiumLogo from './images/stratium.png';
import EventSection from './Events';
import WorkshopsSection from './Workshops';
import Contact from './Contact';
import { eventSections } from './Events';
import WorkshopsSectionDefault from './Workshops';

import SeniorQuiz from './events/SeniorQuiz';
import JuniorQuiz from './events/JuniorQuiz';
import EventRegistration from './EventRegistration';
import OnlineQuiz from './events/OnlineQuiz';
import InsideICU from './events/InsideICU';
import CasePulse from './events/CasePulse';
import AxonAlley from './events/AxonAlley';
import Nexus from './events/Nexus';
import PulsatingPalettes from './events/PulsatingPalettes';
import Cineplexus from './events/Cineplexus';

import Sonostrike from './workshops/Sonostrike';
import DisasterX from './workshops/DisasterX';
import Vivantia from './workshops/Vivantia';
import CodeWild from './workshops/CodeWild';
import Occulex from './workshops/Occulex';
import SonicShift from './workshops/SonicShift';
import Anastamos from './workshops/Anastamos';
import Reviva from './workshops/Reviva';
import SmartAI from './workshops/SmartAI';
import ExodontiaX from './workshops/ExodontiaX';
import Paramatrix from './workshops/Paramatrix';
import DelegatePass from './DelegatePass';
import ScrollToTop from './ScrollToTop';
import AccommodationChatbot from './AccommodationChatbot';
import Accommodation from './Accommodation';

// Chatbot Component
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm the official Striatum 3.0 chatbot. 🤖\nNeed help with registration, events, or schedule? Just ask! 🧠",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();

  // Direct navigation for workshops (external URLs)
  const workshopLinks: { [key: string]: string } = {
    "sonostrike": "https://igmcrisigma.com/workshops/sonostrike",
    "disaster x": "https://igmcrisigma.com/workshops/disaster-x",
    "vivantia": "https://igmcrisigma.com/workshops/vivantia",
    "code wild": "https://igmcrisigma.com/workshops/code-wild",
    "occulex": "https://igmcrisigma.com/workshops/occulex",
    "sonic shift": "https://igmcrisigma.com/workshops/sonic-shift",
    "anastamos": "https://igmcrisigma.com/workshops/anastamos",
    "reviva": "https://igmcrisigma.com/workshops/reviva",
    "smart ai": "https://igmcrisigma.com/workshops/smart-ai",
    "exodontia x": "https://igmcrisigma.com/workshops/exodontiax",
    "paramatrix": "https://igmcrisigma.com/workshops/paramatrix"
  };
  for (const [name, url] of Object.entries(workshopLinks)) {
    if (message.includes(name) && (message.includes("go to") || message.includes("open") || message.includes("navigate") || message.includes("show"))) {
      return `🔗 Here is the direct link to ${name.charAt(0).toUpperCase() + name.slice(1)} workshop:\n${url}`;
    }
  }

  // Direct navigation for events (external URLs)
  const eventLinks: { [key: string]: string } = {
    "senior quiz": "https://igmcrisigma.com/events/senior-quiz",
    "junior quiz": "https://igmcrisigma.com/events/junior-quiz",
    "online quiz": "https://igmcrisigma.com/events/online-quiz",
    "inside icu": "https://igmcrisigma.com/events/inside-icu",
    "case pulse": "https://igmcrisigma.com/events/case-pulse",
    "axon alley": "https://igmcrisigma.com/events/axon-alley",
    "nexus": "https://igmcrisigma.com/events/nexus",
    "pulsating palettes": "https://igmcrisigma.com/events/pulsating-palettes",
    "cineplexus": "https://igmcrisigma.com/events/cineplexus"
  };
  for (const [name, url] of Object.entries(eventLinks)) {
    if (message.includes(name) && (message.includes("go to") || message.includes("open") || message.includes("navigate") || message.includes("show"))) {
      return `🔗 Here is the direct link to ${name.charAt(0).toUpperCase() + name.slice(1)} event:\n${url}`;
    }
  }

  if (message.includes('register') || message.includes('registration')) {
    return "🎯 Registration is now open!\n\n• Visit our official website\n• Fill out the registration form\n• Pay the symposium fee\n• Receive confirmation email\n\nEarly bird discounts available until August 10th! 💫";
  }

if (message.includes('workshop') || message.includes('cortex crafts')) {
  // List all workshops with navigation links
  return `🧠 WORKSHOPS (CORTEX CRAFTS):\n
• Sonostrike (/workshops/sonostrike)
• Disaster X (/workshops/disaster-x)
• Vivantia (/workshops/vivantia)
• Code Wild (/workshops/code-wild)
• Occulex (/workshops/occulex)
• Sonic Shift (/workshops/sonic-shift)
• Anastamos (/workshops/anastamos)
• Reviva (/workshops/reviva)
• Smart AI (/workshops/smart-ai)
• Exodontia X (/workshops/exodontiax)
• Paramatrix (/workshops/paramatrix)

All workshops include hands-on training! ⚡
To open a workshop page, type its name or visit the Workshops tab.`;
}

if (message.includes('event') || message.includes('events') || message.includes('competition')) {
  // List all events with navigation links
  return `📅 EVENTS & COMPETITIONS:

• Senior Quiz (/events/senior-quiz)
• Junior Quiz (/events/junior-quiz)
• Online Quiz (/events/online-quiz)
• Inside ICU (/events/inside-icu)
• Case Pulse (/events/case-pulse)
• Axon Alley (/events/axon-alley)
• Nexus (/events/nexus)
• Pulsating Palettes (/events/pulsating-palettes)
• Cineplexus (/events/cineplexus)

To open an event page, type its name or visit the Events tab.`;
}

    if (message.includes('location') || message.includes('where') || message.includes('venue')) {
      return "📍 Event Location:\n\nIndira Gandhi Medical College and Research Institute (IGMCRI)\nPuducherry, India\n\nThe symposium will be held across multiple venues within the campus including:\n• Main Auditorium\n• Workshop Labs\n• Conference Halls\n\nDetailed venue maps will be provided upon registration! 🗺️";
    }
    
    if (message.includes('dress code') || message.includes('attire')) {
      return "👔 Dress Code Guidelines:\n\n• Workshops: Scrubs or comfortable formal attire\n• Presentations: Business formal\n• Panel Discussions: Smart casual to formal\n• Poster Sessions: Business casual\n\nFor Body Painting event: Old clothes recommended! 🎨\n\nAlways carry your ID and symposium badge! 📋";
    }
    
    if (message.includes('paramedic') || message.includes('paramedics')) {
      return "❤️ Yes! Paramedics are welcome!\n\nSpecial events for paramedics include:\n• Emergency Response Workshops\n• Trauma Management Sessions\n• CPR & First Aid Certification\n• Disaster Management Training\n\nWe believe in inclusive medical education for all healthcare professionals! 🚑✨";
    }
    
    if (message.includes('deadline') || message.includes('submission') || message.includes('abstract')) {
      return "⏰ Important Deadlines:\n\n• Abstract Submission: August 15, 2024\n• Registration Deadline: August 18, 2024\n• Poster Submission: August 19, 2024\n• Paper Presentation: August 20, 2024\n\nLate submissions may be considered with additional fees. Don't miss out! 📝";
    }
    
    if (message.includes('quiz') || message.includes('scholar trophy')) {
      return "🏆 STRIATUM SCHOLAR TROPHY:\n\n• Senior Quiz (Final year students)\n• Junior Quiz (1st-3rd year students)\n• Online Quiz (Open to all)\n\nTopics include:\n• General Medicine\n• Surgery\n• Anatomy & Physiology\n• Current Medical Advances\n\nPrizes worth ₹50,000 total! 🎯";
    }
    
    if (message.includes('panel') || message.includes('firing line')) {
      return "🎤 FIRING LINE: THE EXPERT CIRCUIT\n\nPanel Discussion:\n\n1️⃣ Inside the ICU: What They Don't Teach You in Undergrad\n   • Real ICU scenarios\n   • Critical decision making\n   • Patient management\n   • Included with Tier 2 Delegate Registration\n\nInteractive Q&A session included! 💡";
    }
    
    if (message.includes('schedule') || message.includes('program') || message.includes('timeline')) {
      return "📅 Striatum 3.0 Schedule:\n\n🗓️ October 8-12, 2025\n\nDay 1: Inauguration & Medical Expo\nDay 2: Radiology & Obstetric Workshops\nDay 3: Basic Suturing & AI Workshop\nDay 4: Ophthalmology & Panel Discussions\nDay 5: Quiz Finals & Closing Ceremony\n\nDetailed schedule will be shared with registered participants! ⚡";
    }
    
    if (message.includes('fee') || message.includes('cost') || message.includes('price')) {
      return "💰 Registration Fees:\n\n• Medical Students: ₹1,500\n• Paramedics: ₹1,200\n• Faculty/Doctors: ₹2,000\n• External Participants: ₹2,500\n\n🎯 Early Bird Discount: 20% off until August 10th\n\nIncludes: All events, meals, certificate, and symposium kit! 📦";
    }
    
    if (message.includes('contact') || message.includes('help') || message.includes('support')) {
      return "📞 Need More Help?\n\nContact the Organizing Committee:\n\n📧 Email: striatum.3.igmcri@gmail.com\n📱 Phone: +91 98765 43210\n🌐 Website: www.igmcri.edu/striatum\n\nOffice Hours: 9 AM - 6 PM (Mon-Fri)\n\nWe're here to help make your Striatum 3.0 experience amazing! ✨";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello there! 👋 Welcome to Striatum 3.0!\n\nI'm here to help you with:\n• Registration process\n• Event information\n• Schedules & deadlines\n• Venue details\n• And much more!\n\nWhat would you like to know? 🤖✨";
    }
    
    return "🤖 I'm still learning! For specific queries, please try asking about:\n\n• Registration process\n• Workshop details\n• Event schedules\n• Venue information\n• Deadlines\n• Dress codes\n• Fees & payments\n\nOr contact our support team directly! 💫";
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const quickQuestions = [
    "How do I register?",
    "List all workshops",
    "Where is the event?",
    "Can paramedics participate?"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Floating Chat Button - Positioned higher to avoid bottom nav */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black rounded-full shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window - Also positioned higher */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-lg">
          {/* Header */}
          <div className="bg-black/90 backdrop-blur-lg border-b border-cyan-500/30 p-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30">
                <Brain className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  Striatum 3.0 Bot
                </h3>
                <p className="text-xs text-gray-400">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Questions */}
          <div className="p-2 border-b border-gray-800/50">
            <div className="flex flex-wrap gap-1">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 text-cyan-300 px-2 py-1 rounded-full hover:border-cyan-400/40 transition-all duration-300"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 h-48">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className={`max-w-[85%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`p-2 rounded-lg text-xs ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-400/30 text-cyan-100'
                        : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-100'
                    } shadow-lg backdrop-blur-sm`}
                  >
                    <div className="flex items-start space-x-1">
                      {message.sender === 'bot' && (
                        <Bot className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="leading-relaxed whitespace-pre-line">{message.text}</p>
                        <p className="text-xs opacity-60 mt-1">{formatTime(message.timestamp)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 p-2 rounded-lg shadow-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-1">
                    <Bot className="w-3 h-3 text-purple-400" />
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="bg-black/90 backdrop-blur-lg border-t border-cyan-500/30 p-2">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-full px-3 py-2 pr-8 text-xs text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputText.trim()}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-black rounded-full transition-all duration-300"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Navigation Component
interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  showNav?: boolean;
}
const BottomNav = ({ activeTab, setActiveTab, showNav = true }: BottomNavProps) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'event', label: 'Events', icon: Calendar, path: '/events' },
    { id: 'workshops', label: 'Workshops', icon: Wrench, path: '/workshops' },
    { id: 'about', label: 'About', icon: Users, path: '/about' },
    { id: 'contact', label: 'Contact', icon: Phone, path: '/contact' },
  ];
  const navigate = useNavigate();

  if (!showNav) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-lg border-t border-cyan-500/30 z-40">
      <div className="flex justify-around items-center py-2 px-4">
        {tabs.map(({ id, label, icon: Icon, path }) => (
          <button
            key={id}
            onClick={() => {
              navigate(path);
            }}
            className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
              activeTab === id
                ? 'text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20'
                : 'text-gray-400 hover:text-cyan-300 hover:bg-cyan-400/5'
            }`}
          >
            <Icon size={20} className={activeTab === id ? 'drop-shadow-lg shadow-cyan-400' : ''} />
            <span className="text-xs mt-1 font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-10-08T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-4 my-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-gradient-to-b from-purple-500/20 to-cyan-500/20 border border-cyan-400/30 rounded-lg p-3 min-w-[60px]">
            <div className="text-2xl font-bold text-cyan-300 font-mono">{value.toString().padStart(2, '0')}</div>
          </div>
          <div className="text-xs text-gray-400 mt-1 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
};

// Registration Form Component
interface RegistrationFormProps {
  item: any;
  type: string;
  onBack: () => void;
}
const RegistrationForm = ({ item, type, onBack }: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    year: '',
    category: 'student',
    experience: '',
    expectations: '',
    emergencyContact: '',
    emergencyPhone: '',
    dietaryRestrictions: '',
    tshirtSize: 'M'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getFeeAmount = () => {
    const baseFees = {
      student: type === 'workshop' ? 1500 : 800,
      paramedic: type === 'workshop' ? 1200 : 600,
      faculty: type === 'workshop' ? 2000 : 1000,
      external: type === 'workshop' ? 2500 : 1200
    };
    
    const fee = baseFees[formData.category as keyof typeof baseFees];
    const discountedFee = Math.round(fee * 0.8); // 20% early bird discount
    
    return { original: fee, discounted: discountedFee };
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-8 pb-24 px-6 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-8">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-green-300 mb-4">Registration Successful!</h2>
            <p className="text-gray-300 mb-6">
              Thank you for registering for <span className="text-cyan-300 font-semibold">{item.title}</span>. 
              You will receive a confirmation email shortly with payment instructions and event details.
            </p>
            <div className="space-y-3">
              <div className="bg-black/20 rounded-lg p-3">
                <p className="text-sm text-gray-400">Registration ID</p>
                <p className="text-cyan-300 font-mono">STR3-{Date.now().toString().slice(-6)}</p>
              </div>
              <button
                onClick={onBack}
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300"
              >
                Back to {type === 'workshop' ? 'Workshops' : 'Events'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const fees = getFeeAmount();

  return (
    <div className="min-h-screen pt-8 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          <span>Back to {type === 'workshop' ? 'Workshops' : 'Events'}</span>
        </button>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-400/20 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-cyan-300 mb-2">{item.title}</h2>
          <p className="text-gray-300 mb-4">{item.description}</p>
          
          {type === 'workshop' && (
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-black/20 rounded-lg p-3 text-center">
                <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                <p className="text-xs text-gray-400">Duration</p>
                <p className="text-sm text-cyan-300">{item.duration}</p>
              </div>
              <div className="bg-black/20 rounded-lg p-3 text-center">
                <Users className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                <p className="text-xs text-gray-400">Capacity</p>
                <p className="text-sm text-cyan-300">{item.capacity}</p>
              </div>
              <div className="bg-black/20 rounded-lg p-3 text-center">
                <BookOpen className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                <p className="text-xs text-gray-400">Prerequisites</p>
                <p className="text-sm text-cyan-300">{item.prerequisites}</p>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Registration Fee</h3>
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-sm text-gray-400">Early Bird (Until Aug 10)</p>
                <p className="text-xl font-bold text-green-400">₹{fees.discounted}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Regular Price</p>
                <p className="text-lg text-gray-500 line-through">₹{fees.original}</p>
              </div>
              <div className="bg-green-500/20 border border-green-400/30 rounded-full px-3 py-1">
                <p className="text-xs text-green-300 font-semibold">20% OFF</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-400/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-cyan-300 mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Institution *</label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-400/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-cyan-300 mb-4">Academic Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                >
                  <option value="student">Medical Student</option>
                  <option value="paramedic">Paramedic</option>
                  <option value="faculty">Faculty/Doctor</option>
                  <option value="external">External Participant</option>
                </select>
              </div>
              {formData.category === 'student' && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Year of Study</label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                  >
                    <option value="">Select Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                    <option value="final">Final Year</option>
                    <option value="intern">Intern</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {type === 'workshop' && (
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-400/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-cyan-300 mb-4">Workshop Specific</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Relevant Experience</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Describe any relevant experience or background..."
                    className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Learning Expectations</label>
                  <textarea
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="What do you hope to learn from this workshop?"
                    className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-cyan-400/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-cyan-300 mb-4">Additional Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Emergency Contact Name</label>
                <input
                  type="text"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Emergency Contact Phone</label>
                <input
                  type="tel"
                  name="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">T-Shirt Size</label>
                <select
                  name="tshirtSize"
                  value={formData.tshirtSize}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Dietary Restrictions</label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  placeholder="Vegetarian, Vegan, Allergies, etc."
                  className="w-full bg-gray-800/50 border border-cyan-400/30 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-700 text-black font-semibold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                <span>Processing Registration...</span>
              </>
            ) : (
              <span>Complete Registration - ₹{fees.discounted}</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

// Home Section Component
interface HomeSectionProps {
  setActiveTab: (tab: string) => void;
}
const HomeSection = ({ setActiveTab }: HomeSectionProps) => (
  <div className="min-h-screen flex flex-col items-center justify-start text-center px-6 pt-8 relative">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20 pointer-events-none"></div>
    <div className="relative z-10">
      <div className="relative mb-0 mt-[-80px]">
          <img
            src={stratiumLogo}
            alt="Striatum Logo"
            loading="eager"
            width={288}
            height={288}
            style={{ willChange: 'transform' }}
            className="relative mx-auto mb-0 w-72 h-72 object-contain drop-shadow-2xl animate-float translate-z-0"
          />
        <div className="flex flex-col items-center justify-center mb-0">
          <div className="flex flex-col items-center mb-8">
            <div className="text-base md:text-lg font-semibold text-cyan-200 mb-1 tracking-wide uppercase text-center">
              Indira Gandhi Medical College and Research Institute
            </div>
            <span className="text-base md:text-lg font-medium text-purple-300 tracking-wide uppercase text-center">
              presents
            </span>
          </div>
          <h1 className="relative text-5xl md:text-7xl font-bold tracking-wide bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mb-0 drop-shadow-2xl max-w-[12ch] mx-auto animate-gradient-x">
            STRIATUM
          </h1>
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mb-4 mt-4 drop-shadow-2xl">
            3.0
          </div>
        </div>
        <p className="text-lg md:text-xl text-cyan-200 mb-6 font-light leading-relaxed">
          Connecting Knowledge, Sparking Innovation
        </p>
      </div>

      <CountdownTimer />

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <BuyDelegatePassButton />
        <button
          className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-400/25 mt-1"
          onClick={() => setActiveTab('workshops')}
        >
          Explore Workshops
        </button>
      </div>


      <div className="flex items-center justify-center space-x-2 text-pink-300 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/30 rounded-full py-2 px-4">
        <Heart size={16} className="text-pink-400" />
        <Plus size={12} className="text-white" />
        <Stethoscope size={16} className="text-pink-400" />
        <span className="text-sm font-medium">Events for Paramedics and Dental also included!</span>
      </div>
      <div style={{ height: 120 }} /> {/* Spacer for scroll */}
    </div>
  </div>
);

// Removed inline EventSection component. Use import from './Events'.

// Removed inline WorkshopsSection component. Use import from './Workshops'.

// Blog Section Component

// About Section Component
const AboutSection = () => (
  <div className="min-h-screen pt-8 pb-24 px-6">
    <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-8">
      About Us
    </h2>
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-cyan-300 mb-4">About Striatum 3.0</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          After two successful editions that set the benchmark for undergraduate academic conferences, 
          STRIATUM returns—bolder, brighter, and more electrifying than ever. This year's conference 
          celebrates the connections that spark innovation, collaboration, and knowledge transfer—just like the 
          synaptic bridges in the human brain.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          From immersive workshops hosted by diverse departments to dynamic panel discussions and a 
          splash of creative fun, STRIATUM 3.0 boasts entirely reformed and brand-new concepts that the 
          young and eager minds of our nation have the chance to utilise. This is more than a conference—it's 
          a convergence of minds, a celebration of curiosity, and a platform where ideas ignite and futures take 
          shape.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Get ready to open your mind to new possibilities of what could be held in a grand academic 
          conference as you venture into the upcoming pages, mark the dates on your calendars, gather your 
          colleagues and gear up for what could be the most productive and energetic week of your academic 
          year.
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-500/10 to-teal-500/10 border border-purple-400/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-purple-300 mb-4">About IGMC&RI</h3>
        <p className="text-gray-300 leading-relaxed">
          Indira Gandhi Medical College and Research Institute (IGMC&RI), Puducherry, stands as a beacon of 
          academic excellence and compassionate care. Revered for shaping the brightest young minds in 
          medicine, this institution is more than just a college—it's a crucible of transformation. 
          Here, aspiring doctors embark on a journey defined by rigorous training, and unyielding dedication 
          under the guidance of an exceptional faculty. Utilising each lecture, clinical posting, and hands-on 
          experience as a crucial building block, our students evolve into skilled professionals rooted in 
          empathy, integrity, and innovation—ready to serve, heal, and lead in the ever-evolving world of 
          healthcare.
        </p>
      </div>

      <div className="bg-gradient-to-r from-teal-500/10 to-pink-500/10 border border-teal-400/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-teal-300 mb-4">About SIGMA '25 - Meet Our Team</h3>
        <p className="text-gray-300 leading-relaxed">
          The Students of IGMC&RI Association (SIGMA) 2025 are thrilled to be at your service and are 
          striving to provide you with a smooth and productive experience here at IGMC&RI, and are just one 
          call or text message away from helping everyone with any queries or problems.
        </p>
      </div>

      <div className="bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-400/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-pink-300 mb-4">Acknowledgement and Thank You</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          It brings us immense joy and pride to welcome you to STRIATUM 3.0, the third edition of our undergraduate 
          academic conference, now returning with renewed energy, a broader vision, and a deeper purpose.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          We extend our heartfelt gratitude to our Director, Dr. C. Udayashankar, for his 
          unwavering support and invaluable approval, which made this event possible. We are equally thankful to our 
          Dean, Dr. Ramachandra Bhat, for his consistent encouragement and wise guidance. A special note of 
          appreciation goes out to our dedicated staff advisor, Dr. Niraimathi, whose feedback and support have been 
          instrumental throughout this journey.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          We express our deepest appreciation to all the Faculty Members and Heads of Departments for their active 
          participation, enthusiastic involvement, and continued dedication to the academic growth of undergraduate 
          students. We are especially grateful to Dr. Surendar and Dr. Aswin for their creativity and contribution in 
          designing the academic events and workshops that form the heart of this conference.
        </p>
        <p className="text-gray-300 leading-relaxed">
          As we prepare to host participants from across the nation, we look forward to fostering a space of meaningful 
          dialogue, academic innovation, and collaborative learning. With Synapse as our theme, we hope this 
          conference sparks connections that go beyond the event—between ideas, institutions, and individuals.
        </p>
      </div>

      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-cyan-300 mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="text-teal-400" size={20} />
            <a href="tel:+919952260625" className="text-gray-300 hover:underline">+91 99522 60625</a>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="text-teal-400" size={20} />
            <a href="mailto:striatum.3.igmcri@gmail.com" className="text-gray-300 hover:underline">striatum.3.igmcri@gmail.com</a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-teal-400" size={20} />
            <span className="text-gray-300">IGMCRI, Puducherry</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showRegistration, setShowRegistration] = useState(false);
  const [registrationItem, setRegistrationItem] = useState(null);
  const [registrationType, setRegistrationType] = useState('');
  // Only show loading screen on first SPA load, not on reload/direct visit
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Preload logo image
  useEffect(() => {
    // Create a new image and start loading it immediately
    const img = new Image();
    img.src = stratiumLogo;
    
    // Force the browser to load and cache the image
    const preloadImage = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = stratiumLogo;
      document.head.appendChild(link);
    };
    preloadImage();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Radial Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,236,249,0.03)_0%,transparent_60%)]"></div>
          
          {/* Stars */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Glowing Stars */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-cyan-300/40 rounded-full shadow-[0_0_8px_2px_rgba(0,255,255,0.2)]" />
            </div>
          ))}
        </div>
        
        <div className="relative w-full h-screen flex flex-col items-center justify-center px-6 font-['Space_Grotesk']">
          {/* Clean, Minimal Content */}
          <div className="text-center">
            {/* Title and Loading Line */}
            <div className="space-y-6">
              <h1 className="text-[40px] font-bold tracking-tight bg-gradient-to-r from-purple-300/90 to-[#4ef0f9] bg-clip-text text-transparent">
                STRIATUM 3.0
              </h1>
              <p className="text-[16px] tracking-[0.2em] text-[#9ffcff] font-normal">
                INITIALIZING BIO-NEURAL INTERFACE...
              </p>
              {/* Hidden Preloaded Logo */}
              <div className="hidden">
                <img
                  src={stratiumLogo}
                  alt="Striatum Logo"
                  width={288}
                  height={288}
                  onLoad={(e) => {
                    // Ensure the image is fully loaded and cached
                    const img = e.target as HTMLImageElement;
                    if (img.decode) {
                      img.decode().catch(() => {});
                    }
                  }}
                />
              </div>
              {/* Loading Bar */}
              <div className="w-[280px] mx-auto mt-8">
                <div className="h-[3px] bg-[#4ef0f9]/20 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-purple-400 to-[#4ef0f9] origin-left animate-loading-bar"></div>
                </div>
                <div className="mt-3 text-[#9ffcff] text-sm tracking-[0.2em] font-light">
                  LOADING...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleBackFromRegistration = () => {
    setShowRegistration(false);
    setRegistrationItem(null);
    setRegistrationType('');
  };

  const renderActiveSection = () => {
    if (showRegistration && registrationItem) {
      return (
        <RegistrationForm
          item={registrationItem}
          type={registrationType}
          onBack={handleBackFromRegistration}
        />
      );
    }

    switch (activeTab) {
      case 'home': return <HomeSection setActiveTab={setActiveTab} />;
      case 'event': return (
        <EventSection
          setRegistrationItem={setRegistrationItem}
          setRegistrationType={setRegistrationType}
          setShowRegistration={setShowRegistration}
        />
      );
      case 'workshops': return <WorkshopsSection />;
      case 'about': return <AboutSection />;
      case 'contact': return <Contact />;
      default: return <HomeSection setActiveTab={setActiveTab} />;
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
        {/* Animated Background Pattern */}
        <div className="fixed inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#00f7ff_0%,transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,#d94bff_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#00d9c0_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Animated Stars Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Static Stars */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          
          {/* Shooting Stars */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white animate-shooting-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                opacity: 0.7
              }}
            >
              <div className="w-8 h-0.5 bg-gradient-to-r from-white via-white to-transparent transform -rotate-45" />
            </div>
          ))}
          
          {/* Glowing Stars */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_2px_rgba(0,255,255,0.3)]" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={renderActiveSection()} />
            <Route path="/events" element={
              <EventSection
                setRegistrationItem={setRegistrationItem}
                setRegistrationType={setRegistrationType}
                setShowRegistration={setShowRegistration}
              />
            } />
            <Route path="/workshops" element={<WorkshopsSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<EventRegistration />} />
            <Route path="/event-registration" element={<EventRegistration />} />
            <Route path="/events/senior-quiz" element={<SeniorQuiz />} />
            <Route path="/events/junior-quiz" element={<JuniorQuiz />} />
            <Route path="/events/online-quiz" element={<OnlineQuiz />} />
            <Route path="/events/inside-icu" element={<InsideICU />} />
            {/* <Route path="/events/road-to-residency" element={<RoadToResidency />} /> */}
            <Route path="/events/case-pulse" element={<CasePulse />} />
            <Route path="/events/axon-alley" element={<AxonAlley />} />
            <Route path="/events/nexus" element={<Nexus />} />
            <Route path="/events/pulsating-palettes" element={<PulsatingPalettes />} />
            <Route path="/events/cineplexus" element={<Cineplexus />} />
            <Route path="/workshops/sonostrike" element={<Sonostrike />} />
            <Route path="/workshops/disaster-x" element={<DisasterX onRegister={() => {}} />} />
            <Route path="/workshops/vivantia" element={<Vivantia onRegister={() => {}} />} />
            <Route path="/workshops/code-wild" element={<CodeWild />} />
            <Route path="/workshops/codewild" element={<CodeWild />} />
            <Route path="/workshops/occulex" element={<Occulex />} />
            <Route path="/workshops/sonic-shift" element={<SonicShift />} />
            <Route path="/workshops/sonicshift" element={<SonicShift />} />
            <Route path="/workshops/anastamos" element={<Anastamos />} />
            <Route path="/workshops/reviva" element={<Reviva />} />
            <Route path="/workshops/smart-ai" element={<SmartAI />} />
            <Route path="/workshops/smartai" element={<SmartAI />} />
            <Route path="/workshops/exodontiax" element={<ExodontiaX onRegister={() => {}} />} />
            <Route path="/workshops/paramatrix" element={<Paramatrix onRegister={() => {}} />} />
            <Route path="/delegate-pass" element={<DelegatePass />} />
            <Route path="/accommodation" element={<Accommodation />} />
            {/* Add more event/workshop routes here */}
          </Routes>
        </main>

        {/* Bottom Navigation */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} showNav={!showRegistration} />

        {/* Floating Chatbot */}
        {!showRegistration && <FloatingChatbot />}
      </div>
    </Router>
  );
}

export default App;
