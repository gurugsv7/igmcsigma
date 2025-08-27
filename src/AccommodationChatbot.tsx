import React from "react";
import { Building2 } from "lucide-react";

const AccommodationChatbot: React.FC = () => {
  return (
    <button
      className="fixed bottom-24 left-6 z-50 p-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black rounded-full shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-110 animate-pulse flex items-center justify-center accommodation-chatbot-mobile"
      style={{
        width: 56,
        height: 56,
      }}
      aria-label="Accommodation"
    >
      <Building2 className="w-6 h-6" />
    </button>
  );
};

export default AccommodationChatbot;
