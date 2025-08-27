import { axonAlleyDetails } from "./events/AxonAlley";
import { casePulseDetails } from "./events/CasePulse";
import { nexusDetails } from "./events/Nexus";
import { pulsatingPalettesDetails } from "./events/PulsatingPalettes";
import { cineplexusDetails } from "./events/Cineplexus";
import { seniorQuizDetails } from "./events/SeniorQuiz";
import { juniorQuizDetails } from "./events/JuniorQuiz";
import { onlineQuizDetails } from "./events/OnlineQuiz";
import { insideICUDetails } from "./events/InsideICU";
// Workshops
import { disasterXDetails } from "./workshops/DisasterX";
import { codeWildDetails } from "./workshops/CodeWild";
import { sonostrikeDetails } from "./workshops/Sonostrike";
import { vivantiaDetails } from "./workshops/Vivantia";
import { smartAIDetails } from "./workshops/SmartAI";
import { sonicShiftDetails } from "./workshops/SonicShift";
import { anastamosDetails } from "./workshops/Anastamos";
import { revivaDetails } from "./workshops/Reviva";
import { occulexDetails } from "./workshops/Occulex";
import { paramatrixDetails } from "./workshops/Paramatrix";
import { exodontiaXDetails } from "./workshops/ExodontiaX";

// Aggregate all details in a single object
export const allEventWorkshopDetails = {
  "AxonAlley": axonAlleyDetails,
  "CasePulse": casePulseDetails,
  "Nexus": nexusDetails,
  "PulsatingPalettes": pulsatingPalettesDetails,
  "Cineplexus": cineplexusDetails,
  "SeniorQuiz": seniorQuizDetails,
  "JuniorQuiz": juniorQuizDetails,
  "OnlineQuiz": onlineQuizDetails,
  "InsideICU": insideICUDetails,
  // Workshops
  "DisasterX": disasterXDetails,
  "CodeWild": codeWildDetails,
  "Sonostrike": sonostrikeDetails,
  "Vivantia": vivantiaDetails,
  "SmartAI": smartAIDetails,
  "SonicShift": sonicShiftDetails,
  "Anastamos": anastamosDetails,
  "Reviva": revivaDetails,
  "Occulex": occulexDetails,
  "Paramatrix": paramatrixDetails,
  "ExodontiaX": exodontiaXDetails,
};
