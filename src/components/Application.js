import React, { useState } from "react";
import DayList from "components/DayList";
import "components/Application.scss";

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
  ])
  return (
    <main className="layout">
      <section className="sidebar">
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
      </section>
      <section className="schedule">
        <nav>
          <DayList
            days={days}
            day={"Monday"}
            setDay={(day) => console.log(day)}
          />
        </nav>
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}
