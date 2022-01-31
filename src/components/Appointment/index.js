import React from "react";
import "components/Appointment/styles.scss";
import Show from "components/Appointment/Show";
import Error from "components/Appointment/Error";
import Empty from "components/Appointment/Empty";
import Header from "./Header";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE="CREATE";

export default function Appointment({ time, interview }) {
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );
  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
        />
      )}
      {mode===CREATE&&<Form interviewers={[]} onCancel={back}  />}
      
    </article>
  );
}
