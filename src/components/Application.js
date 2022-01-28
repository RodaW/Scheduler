import React, { useState } from "react";
import DayList from "components/DayList";
import "components/Application.scss";
import Appointment from "components/Appointment/index.js";
const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer: {
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      },
    },
  },
  {
    id: 5,
    time: "4pm",
  },
];
export default function Application(props) {
  const [days, setDays] = useState([
    {
      id: 1,
      name: "Monday",
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5,
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0,
    },
  ]);
  return (
    <main className="layout">
      <section className="sidebar">
      <nav>
          <DayList
            days={days}
            value={"Monday"}
            onChange={(day) => console.log(day)}
          />
        </nav>
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
      </section>
      <section className="schedule">
        
        {appointments.map((appointment) => (
          <Appointment key={appointment.id} {...appointment} />
        ))}
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
