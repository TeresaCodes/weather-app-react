import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [cityName, setCityName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(cityName);
  };

  return (
    <div className="SearchBar mt-3">
      <form
        className="row row-cols-lg-auto justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="col-3">
          <input
            type="text"
            placeholder="Enter city"
            name="search"
            id="search_content"
            className="form-control"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            autoFocus
          />
        </div>
        <div className="col-1">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
