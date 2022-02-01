import React from "react";
import PropTypes from "prop-types";
import "components/InterviewerList.scss";
import InterviewListItems from "./InterviewerListItem";

function InterviewList(props) {
  const { value, interviewers, onChange } = props;

  const interviewersList = interviewers.map((indvInterviewer) => {
    return (
      <InterviewListItems
        key={indvInterviewer.id}
        name={indvInterviewer.name}
        avatar={indvInterviewer.avatar}
        selected={indvInterviewer.id === value}
        setInterviewer={() => onChange(indvInterviewer.id)}
      ></InterviewListItems>
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersList}</ul>
    </section>
  );
}

InterviewList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewList;
