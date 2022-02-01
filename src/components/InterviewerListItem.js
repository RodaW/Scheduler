import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewListItems(props) {
  const setInterviwer = props.setInterviewer;

  const interviewerClass = classNames("interviewers__item", {
    "--selected": props.selected,
  });

  const noSpaces = interviewerClass.replace(" ", "");

  return (
    <li onClick={setInterviwer} className={noSpaces}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
