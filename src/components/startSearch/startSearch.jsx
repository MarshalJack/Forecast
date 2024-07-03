import React, { useEffect, useState } from "react";
import "./startSearch.css";
export default function StartSearch({ setCity }) {
  const [search, setSearch] = useState(null);
  function getCity(opt) {
    try {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${opt}&limit=5&appid=48cdd7136e25acb85f5f5ad609fb9eb1`
      )
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch {}
  }
  useEffect(() => {
    if (search) {
      getCity(search);
    }
  }, [search]);

  return (
    <div className="search_form">
      <div className="search">
        <div>
          <input
            type="text"
            id="cityname"
            placeholder="City Name"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <ul className="citiesList"></ul>
        </div>
        <button
          type="button"
          onClick={() => setCity(document.getElementById("cityname").value)}
        >
          Click
        </button>
      </div>
    </div>
  );
}
