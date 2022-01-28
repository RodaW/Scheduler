import React from "react";
import "components/Appointment/styles.scss";
import Show from "components/Appointment/Show";
import Error from "components/Appointment/Error";
import Empty from "components/Appointment/Empty";
import Header from "./Header";
export default function Appointment({ time, interview }) {
  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? (
        <Show interviewer={interview.interviewer} student={interview.student} />
      ) : (
        <Empty />
      )}
    </article>
  );
}
