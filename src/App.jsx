import { useEffect, useState } from "react";
import "./App.css";
import StartSearch from "./components/startSearch/startSearch";
import Mode from "./components/mode/mode";
import Current from "./components/current/current";
import HourlyList from "./components/hourly/hourlyList";
import DailyList from "./components/daily/dailyList";

function App() {
  const [cityName, setCity] = useState(null);
  const [crd, setCoords] = useState(null);
  const [obj, setObj] = useState(null);
  const [obj1, setObj1] = useState(null);
  const [obj2, setObj2] = useState(null);
  const [units, setUnits] = useState("imperial");
  const [mode, setMode] = useState(0);
  function getCurrentLoc() {
    const success = (pos) => {
      const { longitude, latitude } = pos.coords;
      setCoords({ lat: latitude, lon: longitude });
    };

    const error = () => {
      console.log("Error fetching location.");
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }

  useEffect(() => {
    getCurrentLoc();
  }, []);

  useEffect(() => {
    if (crd) {
      try {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${crd.lat}&lon=${crd.lon}&cnt=10&appid=48cdd7136e25acb85f5f5ad609fb9eb1&units=${units}`
        )
          .then((response) => response.json())
          .then((json) => setObj(json));
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${crd.lat}&lon=${crd.lon}&cnt=6&appid=48cdd7136e25acb85f5f5ad609fb9eb1&lang=$eng&units=${units}`
        )
          .then((response) => response.json())
          .then((json) => setObj1(json.list));
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${crd.lat}&lon=${crd.lon}&units=${units}&appid=48cdd7136e25acb85f5f5ad609fb9eb1`
        )
          .then((response) => response.json())
          .then((json) => setObj2(json.list));
      } catch {}
    }
  }, [crd]);

  useEffect(() => {
    if (obj) {
      setCity(obj.name);
      console.log("obj");
      console.log(obj);
    }
  }, [obj]);
  useEffect(() => {
    if (cityName) {
      try {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&cnt=10&appid=48cdd7136e25acb85f5f5ad609fb9eb1&units=${units}`
        )
          .then((response) => response.json())
          .then((json) => setObj(json));
      } catch {}
    }
  }, [cityName]);

  return (
    <div className="App">
      {obj && <Current obj={obj} units={units} />}
      <Mode mode={mode} setMode={setMode} />
      {!mode ? (
        <>{obj1 && <HourlyList obj={obj1} units={units} />}</>
      ) : (
        <>{obj2 && <DailyList obj={obj2} units={units} />}</>
      )}
    </div>
  );
}

export default App;
