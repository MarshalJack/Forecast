import React, { useState, useEffect } from "react";
import "../hourly/hourly.css";

export default function Daily({ weather, units }) {
  console.log(weather.weather[0]);
  const img = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

  return (
    <div className="hourlyItem">
      <h1>{new Date(weather.dt_txt).toLocaleDateString()}</h1>
      <img src={img} alt={img} />
      {img.key}
      <p className="hourlyDescription">{weather.weather[0].description}</p>
      <p>
        {Math.round(weather.main.temp)}&#176;{(units = "imperial" ? "F" : "C")}
      </p>
      <div className="wind">
        <p>
          {Math.round(weather.wind.speed)}
          {(units = "imperial" ? "mph" : "km/h")}
        </p>
      </div>
    </div>
  );
}
