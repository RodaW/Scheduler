import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";
export default function InterviewerListItem({
  name,
  avatar,
  selected,
  setInterviewer,
}) {
  return (
    <li
      className={classNames("interviewers__item", {
        "interviewers__item--selected": selected,
      })}
      onClick={setInterviewer}
    >
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
