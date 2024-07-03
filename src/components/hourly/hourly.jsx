import React, { useState } from "react";
import "./hourly.css";
import { useEffect } from "react";

export default function Hourly({ main, weather, wind, dt_txt, units }) {
  const img = `https://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <div className="hourlyItem">
      <h1>{`${new Date(dt_txt)
        .toLocaleTimeString()
        .match(/^[0-9]+:[0-9]+/g)} ${new Date(dt_txt)
        .toLocaleTimeString()
        .match(/[A-Z]+$/g)}`}</h1>
      <img src={img} alt={img} />
      {img.key}
      <p className="hourlyDescription">{weather[0].description}</p>
      <p>
        {Math.round(main.temp)}&#176;{(units = "imperial" ? "F" : "C")}
      </p>
      <div className="wind">
        {/* <img src="./img/wind.png" alt="wind" className="windIcon" /> */}
        <p>
          {" "}
          {Math.round(wind.speed)}
          {(units = "imperial" ? "mph" : "km/h")}
        </p>
      </div>
    </div>
  );
}
