import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });
  const dailyAppointments = [];
  const setDays = (days) => {
    setState((prev) => ({ ...prev, days }));
  };
  useEffect(() => {
    // axios
    //   .get("/api/days")
    //   .then((res) => setDays(res.data))
    //   .catch((err) => console.log(err));
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);
  return (
    <main className="layout">
      <section className="sidebar">
        <nav>
          <DayList
            days={state.days}
            value={state.day}
            onChange={(day) => setState({ ...state, day })}
          />
        </nav>
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
      </section>
      <section className="schedule">
        {dailyAppointments.map((appointment) => (
          <Appointment key={appointment.id} {...appointment} />
        ))}
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
