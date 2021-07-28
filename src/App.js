import React, { useState } from "react";
import { fetchWeather } from "./Utils/api";
import Background from "./Assets/Image/bg.jpg";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
    }
  };

  return (
    <div
      className="main-container"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <header className="">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
            {/* <p>
              <sup id="lat">{(weather.coord.lat).toFixed(2)}</sup>° lat
              <sup id="long">{(weather.coord.lon).toFixed(2)}</sup>° long
            </p> */}
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}

            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
