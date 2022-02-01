import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  // an array of day objects
  const dayData = props.days;
  const daysList = dayData.map((singleDay) => {
    return (
      <DayListItem
        key={singleDay.id}
        name={singleDay.name}
        spots={singleDay.spots}
        selected={singleDay.name === props.value}
        setDay={props.onChange}
      ></DayListItem>
    );
  });
  return <ul>{daysList}</ul>;
}
