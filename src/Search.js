import React, { useState } from "react";
import Weather from "./Weather.js";

export default function Search() {
  const [cityName, setCityName] = useState(null);

  function handleClick(e) {
    e.preventDefault();
    setCityName(document.getElementById("search_content").value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setCityName(document.getElementById("search_content").value);
    }
  }

  return (
    <div className="Search">
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
      <Weather city={cityName} />
    </div>
  );
}
