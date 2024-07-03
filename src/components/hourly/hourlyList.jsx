import React from "react";
import Hourly from "./hourly";
import "./hourly.css";

export default function HourlyList(obj, units) {
  const objArray = Object.values(obj);
  console.log(objArray[0]);
  const items = objArray[0].map((item, index) => {
    return <Hourly key={index} {...item} units={units} />;
  });

  return (
    <div className="hourlyContainer">
      <ul>
        <li>Time:</li>
        <li>Weather:</li>
        <li>Temp:</li>
        <li>Wind:</li>
      </ul>
      <div className="hourlyItems">{items}</div>
    </div>
  );
}
