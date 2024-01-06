import React, { useState } from "react";
import WeatherData from "./WeatherData.js";

export default function WeatherSearch() {
  const [cityName, setCityName] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setCityName(document.getElementById("search_content").value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setCityName(document.getElementById("search_content").value);
    }
  }

  return (
    <div className="WeatherSearch mt-3">
      <div className="row row-cols-lg-auto justify-content-center">
        <div className="col-3">
          <input
            type="text"
            placeholder="Enter city"
            name="search"
            id="search_content"
            className="form-control"
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
      <br />
      <WeatherData city={cityName} />
    </div>
  );
}
