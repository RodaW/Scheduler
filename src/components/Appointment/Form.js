import React, { useState } from 'react';
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  function reset() {
    setStudent("")
    setInterviewer(null)
  }

  function cancel() {
    reset()
    props.onCancel()
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form onSubmit={event => event.preventDefault()} autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          /*
            This must be a controlled component
            your code goes here
          */
          />
        </form>
        {/* {interviewer ? <InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
        /> : <InterviewerList
          interviewers={props.interviewers}

        />} */}
        {<InterviewerList
          interviewers={props.interviewers}
          value={interviewer}
          onChange={(id) => setInterviewer(id)}
        />}
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  )
}