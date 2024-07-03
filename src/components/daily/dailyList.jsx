import React, { useState, useEffect } from "react";
import Daily from "./daily";
import "../hourly/hourly.css";

export default function DailyList(obj, units) {
  const [obj1] = useState(obj.obj);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    if (obj1 && obj1.length > 0) {
      const tempArr = [];
      for (let index = 4; index < obj1.length; index += 8) {
        if (obj1[index]) {
          tempArr.push(obj1[index]);
        }
      }
      setArr(tempArr);
    } else {
      console.log("obj is empty or not passed correctly.");
    }
  }, [obj1]);

  const items = arr.map((item, index) => (
    <Daily key={index} weather={item} units={units} />
  ));
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
