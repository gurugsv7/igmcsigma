import React from "react";

interface EventDetailsProps {
  event: any;
  onBack: () => void;
}

const EventDetails = ({ event, onBack }: EventDetailsProps) => {
  const getEventDetails = () => {
    switch(event.title) {
      case 'Case Presentation':
        return {
          title: "CASE PRESENTATION (CASE PULSE)",
          description: "Part of STRIATUM 3.0 - SNYAPSE: Connecting knowledge, Sparking Innovation",
          rules: [
            "Each team can have a maximum of 2 members",
            "Individual presentations will also be accepted",
            "Cases should be from Medicine, Surgery, OBGY and Paediatrics",
            "Only one delegate in the team is allowed to present the case. However questions can be answered by either of the team members",
            "The case presented should be original and must be from any of the teaching hospitals affiliated to the delegate's college and must be followed up"
          ],
          abstract: [
            "Abstracts should not exceed 500 words",
            "The last date for the submission of abstracts is 24th September, 2025",
            "The abstracts should be in the form of a word document (.doc or .docx)",
            "The abstracts should be in the format of- Identification, data of the patient, presenting complaints, history, examination findings, investigations, differential diagnosis, treatment, follow up and references",
            "Abstracts should be sent to striatum.3.igmcri@gmail.com",
            "Rename the file as Name_Subject_Casepulse"
          ],
          presentation: [
            "The presentation is expected to be in the form of a Power point presentation (.ppt or .pptx)",
            "The power point presentation is to be submitted at the latest by 5th October 2025",
            "Presentation on Sunday morning, 12th October 2025"
          ],
          registration: {
            single: "Rs. 300",
            team: "Rs. 400 (A team of 2 members)",
            prize: "Rs. 3000"
          }
        };
      case 'Poster Presentation':
        return {
          title: "POSTER PRESENTATION (AXON ALLEY)",
          description: "Part of STRIATUM 3.0 - SNYAPSE: Connecting knowledge, Sparking Innovation",
          rules: [
            "Only digital posters in print are accepted",
            "Poster size should not exceed 4' x 3'",
            "Teams should consist of a maximum of 2 members",
            "Only one delegate in the team is allowed to present the poster. However questions can be answered by any of the team members",
            "Only e-posters in landscape orientation are accepted",
            "E-posters should be sent to striatum.3.igmcri@gmail.com",
            "Rename the file as Name_AxonAlley",
            "Plagiarism of any type will lead to disqualification",
            "All information must appear within one slide only",
            "Resolution of the e-poster should be 1080×1920 pixels",
            "Last day for submission of the e-poster 1st October 2025",
            "Selected teams have to present their posters on Sunday morning, 12th October 2025",
            "Delegates will be allotted a time of 7 minutes in total: 4 minutes to explain their poster and 3 minutes for questions by jury"
          ],
          registration: {
            single: "Rs. 300",
            team: "Rs. 400 (A team of 2 members)",
            prize: "Rs. 3000"
          }
        };
      case 'Paper Presentation':
        return {
          title: "PAPER PRESENTATION (NEXUS)",
          description: "Part of STRIATUM 3.0 - SNYAPSE: Connecting knowledge, Sparking Innovation",
          rules: [
            "Teams should consist of a maximum of two members. Individual presenters will also be accepted",
            "Only one delegate in the team is allowed to present the paper. However questions can be answered by either of the team members",
            "Each presenter will be given a total of 8 minutes- 5 minutes for presenting their case and 3 minutes for answering questions from the judges and the audience",
            "Presentation on Sunday morning, 12th October 2025"
          ],
          abstract: [
            "Delegates are expected to send in the abstracts (not more than 500 words) before the deadline-24th September 2025 to striatum.3.igmcri@gmail.com",
            "Send in the form of Word document (.doc or .docx). Rename the file as Name_Nexus",
            "The abstract should be in format of: Title, Introduction, Background, Aims and Objectives, Materials and Methods, Results & analysis (as applicable), and References",
            "Informed consent form, study questionnaire and case study form must be uploaded separately if used for the study",
            "All abstracts will be screened by a committee composed of senior faculty members",
            "The screening committee will select the top abstracts that will be presented in the oral paper presentation",
            "The decision made by the screening committee will be final, and is not subject to reconsideration"
          ],
          presentation: [
            "The presentation is expected to be in the form of a PowerPoint presentation (.ppt or .pptx file) not exceeding 18 slides",
            "The power point presentation is to be submitted by the last date-5th October 2025"
          ],
          registration: {
            single: "Rs. 300",
            team: "Rs. 400 (A team of 2 members)",
            prize: "Rs. 3000"
          }
        };
      case 'Body Painting':
        return {
          title: "BODY PAINTING: PULSATING PALETTES",
          description: "Part of STRIATUM 3.0 - SNYAPSE: Connecting knowledge, Sparking Innovation",
          theme: "ANATOMY",
          rules: [
            "A team of 3 students can participate including the model",
            "Body painting (Any region) – GROSS ANATOMY",
            "Participants should explain the painting to the judges during evaluation",
            "Creative innovative ideas gains extra points",
            "Participants should bring the required materials and stationaries",
            "Judge's Decision will be FINAL",
            "Event on Saturday morning, 11th October 2025"
          ],
          registration: {
            team: "Rs. 150/Team",
            prize: "Rs. 1500"
          }
        };
      case 'Senior Quiz':
        return {
          title: "SENIOR QUIZ - STRIATUM SCHOLAR TROPHY",
          description: "Part of STRIATUM 3.0 - SNYAPSE: Connecting knowledge, Sparking Innovation",
          topic: "GASTROENTEROLOGY",
          rules: [
            "Maximum of 3 Members per team",
            "Eligibility: MBBS Students from 1st Year to CRMI are eligible (Only one CRMI from the 2020 Batch per team)",
            "Cross college teams are allowed",
            "On spot registrations allowed",
            "Event on Sunday, 12th October 2025",
            "Prelims: 9:00 AM to 10:00 AM",
            "Finals: 2:00 PM to 5:30 PM",
            "No limitations on number of teams per college",
            "Top 6 Teams will qualify for the Finals",
            "Quizmaster's decision will be final"
          ],
          registration: {
            team: "Rs. 600/Team (No delegate fee)",
            prize: "Rs. 40,000"
          }
        };
      case 'Junior Quiz':
        return {
          title: "JUNIOR QUIZ - STRIATUM SCHOLAR TROPHY",
          description: "Part of STRIATUM 3.0 - SNYAPSE: Connecting knowledge, Sparking Innovation",
          topic: "ANATOMY and PATHOLOGY",
          rules: [
            "Maximum 3 members per team",
            "Eligibility: MBBS Students from 1st Year to 3rd year are eligible (Only one 3rd year from the batch of 2022 per team)",
            "Cross college teams are allowed",
            "On spot registrations allowed",
            "Event on Sunday, 12th October 2025",
            "Prelims: 9:00 AM to 10:00 AM",
            "Finals: 2:00 PM to 5:30 PM",
            "No limitations on number of teams per college",
            "Top 6 teams will qualify for Finals",
            "Quizmaster's decision will be final!"
          ],
          registration: {
            team: "Rs. 600/Team",
            prize: "Rs. 30,000"
          }
        };
      case 'Inside the ICU':
        return {
          title: "Inside the ICU: What They Don't Teach You in Undergrad Medicine",
          description: [
            "Part of FIRING LINE: THE EXPERT CIRCUIT",
            "Expert panel discussion on practical ICU management and critical decision making",
            "Learn from experienced practitioners about real-world scenarios",
            "Interactive session with Q&A opportunities"
          ],
          time: "Afternoon session on 11th October 2025",
          registration: {
            fee: "Included with Tier 2 Delegate Pass"
          }
        };
      case 'Online Quiz':
        return {
          title: "ONLINE QUIZ - STRIATUM SCHOLAR TROPHY",
          description: "Part of STRIATUM 3.0 - SNYAPSE: Connecting knowledge, Sparking Innovation",
          topic: "DIABETES MELLITUS",
          rules: [
            "Maximum 3 members per team",
            "Eligibility: MBBS Students from 1st Year to CRMI are eligible (Only one CRMI from the 2020 Batch per team)",
            "NO cross college teams are allowed",
            "Quiz consists of 3 rounds",
            "Preliminary round will be conducted ONLINE on 28/09/2025 [4.00pm to 4.45pm]",
            "Preliminary round will consist of 45 questions, with a duration of 45 minutes",
            "Link will be sent on the day of Quiz",
            "During the preliminary round, camera should be ON always",
            "Any malpractice identified will lead to disqualification",
            "Top 12 teams from the preliminary round will be qualified for the semifinals",
            "Semifinals will be conducted offline on 12/10/2025",
            "Top 6 teams from semifinals will be qualified for Finals",
            "Finals will be conducted offline on 12/10/2025"
          ],
          registration: {
            team: "Rs. 300/team",
            prize: "Rs. 20,000"
          }
        };
      case 'Short Film':
        return {
          title: "MEDICAL SHORT FILM: CINEPLEXUS",
          description: "Part of STRIATUM 3.0 - SNYAPSE: Connecting knowledge, Sparking Innovation",
          themes: [
            "Youth Suicide Prevention",
            "Hidden depression behind a smile",
            "Substance Abuse Awareness"
          ],
          categories: [
            "Live Action",
            "Documentary",
            "Animation"
          ],
          rules: [
            "Participants- Medical and Paramedical",
            "Duration of the Film (Including opening and closing credits) should not exceed more than 10 minutes or be less than 5 minutes",
            "Ratio of the short film be in 16:9 aspect Ratio",
            "The film can be in any language with compulsory English sub-titles",
            "Each team can submit only one copy",
            "Selected entries will be judged on spot on Saturday morning, 11th October 2025",
            "Submission has to be done via online mode as google drive link",
            "DEADLINE FOR SUBMISSION: 28th September 2025 Sunday"
          ],
          registration: {
            fee: "Rs. 500",
            prize: "Rs. 10,000"
          }
        };
      default:
        return null;
    }
  };

  const details = getEventDetails();
  if (!details) return null;

  return (
    <div className="min-h-screen pt-8 pb-24 px-6">
      <button
        onClick={onBack}
        className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2"
      >
        <span className="text-lg">&#8592;</span>
        <span>Back to Event</span>
      </button>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-6">
          {details.title}
        </h2>

        {details.description && typeof details.description === 'string' && (
          <div className="mb-6">
            <p className="text-white/80">{details.description}</p>
          </div>
        )}

        {details.topic && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Topic</h3>
            <p className="text-white/80">{details.topic}</p>
          </div>
        )}

        {details.theme && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Theme</h3>
            <p className="text-white/80">{details.theme}</p>
          </div>
        )}

        {details.themes && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Themes</h3>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              {details.themes.map((theme: string, idx: number) => (
                <li key={idx}>{theme}</li>
              ))}
            </ul>
          </div>
        )}

        {details.categories && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Categories</h3>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              {details.categories.map((category: string, idx: number) => (
                <li key={idx}>{category}</li>
              ))}
            </ul>
          </div>
        )}

        {Array.isArray(details.description) && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Details</h3>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              {details.description.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {details.rules && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Rules & Regulations</h3>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              {details.rules.map((rule: string, idx: number) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>
        )}

        {details.abstract && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Abstract Submission</h3>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              {details.abstract.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {details.presentation && (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-cyan-300 mb-2">Presentation Guidelines</h3>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              {details.presentation.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 p-6 rounded-xl bg-cyan-900/20 border-2 border-cyan-500/30">
          <h3 className="text-xl font-bold text-cyan-300 mb-4">Registration Details</h3>
          <div className="space-y-2 text-white/80">
            {details.registration.single && <p>Single Member: {details.registration.single}</p>}
            {details.registration.team && <p>Team: {details.registration.team}</p>}
            {details.registration.fee && <p>{details.registration.fee}</p>}
            {details.registration.prize && (
              <p className="text-lg font-semibold text-purple-300">
                Prize Worth: {details.registration.prize}
              </p>
            )}
            <button
              disabled
              className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                border-2 border-gray-500/60 text-gray-400 font-bold
                bg-white/5 backdrop-blur-md
                shadow-[0_0_12px_2px_rgba(0,255,255,0.05)]
                cursor-not-allowed"
            >
              <span role="img" aria-label="register">⏳</span>
              Registration Opening Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
