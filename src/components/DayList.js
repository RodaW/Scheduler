import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList({ days }) {
  return (
    <ul>
      {days.map((item) => (
        <DayListItem
          key={item.id}
          name={item.name}
          spots={item.spots}
          selected={item.name === item.day}
          setDay={item.setDay}
        />
      ))}
    </ul>
  );
}
