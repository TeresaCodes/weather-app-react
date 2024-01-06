import React, { useState } from "react";
import WeatherData from "./WeatherData.js";

export default function Search() {
  const [cityName, setCityName] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setCityName(document.getElementById("search_content").value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setCityName(document.getElementById("search_content").value);
    }
  }

  return (
    <div className="Weather">
      <input
        type="text"
        placeholder="Enter city"
        name="search"
        id="search_content"
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <input
        type="button"
        value="Search"
        id="search_button"
        onClick={handleClick}
      />
      <WeatherData city={cityName} />
    </div>
  );
}
