import React from "react";
import classNames from "classnames";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";
export default function InterviewerList({
  interviewers,
  onChange,
  value,
}) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map((person) => (
          <InterviewerListItem
            name={person.name}
            avatar={person.avatar}
            key={person.id}
            setInterviewer={()=>onChange(person.id)}
            selected={value === person.id}
          />
        ))}
      </ul>
    </section>
  );
}
