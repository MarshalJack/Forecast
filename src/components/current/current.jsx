import React, { useState } from "react";
import "./current.css";
import StartSearch from "../startSearch/startSearch";

export default function Current({ obj, units }) {
  if (obj.weather[0].main === "Clear") {
    document.body.classList.remove("cloudy");
    document.body.classList.add("clear");
  } else {
    document.body.classList.remove("clear");
    document.body.classList.add("cloudy");
  }
  const img = `https://openweathermap.org/img/w/${obj.weather[0].icon}.png`;
  const [search_inp, setSearch] = useState(obj.name + ", " + obj.sys.country);

  async function search(cityName) {
    try {
      const apiKey = "48cdd7136e25acb85f5f5ad609fb9eb1";
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <div className="currentContainer">
      <div className="currentHeader">
        <h1>
          {obj.name}, {obj.sys.country}
        </h1>
        <h2 className="currentDate">{new Date().toLocaleDateString()}</h2>
      </div>
      <div className="currentContent">
        <div>
          <h2>
            {Math.round(obj.main.temp)}&#176;{(units = "imperial" ? "F" : "C")}
          </h2>
          <p>
            Real Feel {Math.round(obj.main.feels_like)}&#176;
            {(units = "imperial" ? "F" : "C")}
          </p>
        </div>
      </div>
    </div>
  );
}
