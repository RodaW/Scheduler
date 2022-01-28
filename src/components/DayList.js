import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList({ days, value, onChange }) {
  return (
    <ul>
      {days.map((item) => (
        <DayListItem
          key={item.id}
          name={item.name}
          spots={item.spots}
          selected={item.name === value}
          setDay={()=>onChange(item.name)}
        />
      ))}
    </ul>
  );
}
