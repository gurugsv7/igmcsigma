import React from "react";

interface Slot {
  time: string;
  event?: string | null;
  events?: string[];
}

interface Day {
  day: string;
  date: string;
  slots: Slot[];
}

const ScheduleSection = () => {
  const schedule: Day[] = [
    {
      day: "WEDNESDAY",
      date: "08/10/25",
      slots: [
        {
          time: "FORENOON",
          event: "INAUGUARATION OF STRIATUM 3.0"
        },
        {
          time: "AFTERNOON",
          event: "MEDICAL EXPO (SYNAPTIC SPHERE)"
        },
        {
          time: "EVENING",
          event: null
        }
      ]
    },
    {
      day: "THURSDAY",
      date: "09/10/25",
      slots: [
        {
          time: "FORENOON",
          event: "RADIOLOGY WORKSHOP"
        },
        {
          time: "AFTERNOON",
          event: "OBSTETRIC WORKSHOP"
        },
        {
          time: "EVENING",
          events: [
            "WILDERNESS MEDICINE",
            "BASIC ANAESTHESIOLOGY WORKSHOP"
          ]
        }
      ]
    },
    {
      day: "FRIDAY",
      date: "10/10/25",
      slots: [
        {
          time: "FORENOON",
          event: "BASIC SUTURING SKILLS"
        },
        {
          time: "AFTERNOON",
          event: "NEONATAL RESUSCITATION PRACTICES"
        },
        {
          time: "EVENING",
          events: [
            "DISASTER X: DISASTER MANAGEMENT WORKSHOP",
            "AI IN RESEARCH WORKSHOP"
          ]
        }
      ]
    },
    {
      day: "SATURDAY",
      date: "11/10/25",
      slots: [
        {
          time: "FORENOON",
          events: [
            "OPHTHALMOLOGY WORKSHOP",
            "BODY PAINTING"
          ]
        },
        {
          time: "AFTERNOON",
          events: [
            "SHORT FILM",
            "ONLINE QUIZ SEMI FINALS",
            "PANEL DISCUSSIONS:",
            "INSIDE THE ICU",
            "THE ROAD TO RESIDENCY"
          ]
        },
        {
          time: "EVENING",
          events: [
            "GALA NIGHT",
            "DENTAL WORKSHOP",
            "PARAMEDICAL WORKSHOP"
          ]
        }
      ]
    },
    {
      day: "SUNDAY",
      date: "12/10/25",
      slots: [
        {
          time: "FORENOON",
          events: [
            "ONLINE QUIZ FINALS",
            "SENIOR QUIZ (PRELIMS)",
            "JUNIOR QUIZ (PRELIMS)"
          ]
        },
        {
          time: "AFTERNOON",
          events: [
            "POSTER PRESENTATION",
            "CASE PRESENTATION",
            "PAPER PRESENTATION"
          ]
        },
        {
          time: "EVENING",
          events: [
            "SENIOR QUIZ (FINALS)",
            "JUNIOR QUIZ (FINALS)",
            "CLOSING CEREMONY AND AWARDS DISTRIBUTION"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-24 px-6">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-8">
        Schedule
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {schedule.map((day, dayIndex) => (
          <div key={dayIndex} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/30">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-cyan-300">{day.day}</h3>
              <span className="text-white/70">{day.date}</span>
            </div>
            
            <div className="space-y-4">
              {day.slots.map((slot, slotIndex) => (
                <div key={slotIndex} className="border-l-2 border-cyan-400/30 pl-4">
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">{slot.time}</h4>
                  {slot.event ? (
                    <p className="text-white/80">{slot.event}</p>
                  ) : slot.events ? (
                    <ul className="space-y-1">
                      {slot.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="text-white/80">{event}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-white/40">No events scheduled</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSection;
