import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [tempUnit, setTempUnit] = useState("celsius");
  const [temperature, setTemperature] = useState(props.temperature);

  function changeUnitToFahrenheit() {
    setTempUnit("fahrenheit");
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function changeUnitToClesius() {
    setTempUnit("celsius");
    setTemperature(Math.round(props.temperature));
  }

  function showTemperature(temperature, unit) {
    return (
      <div className="WeatherTemperature col-6 temperature-view">
        <span className="temperature">{temperature}</span>
        <span className="units ms-2">{showClickableUnit(unit)}</span>
      </div>
    );
  }

  function showClickableUnit(unit) {
    if (unit === "celsius") {
      return (
        <sup>
          °C |
          <button
            type="button"
            className="btn btn-link"
            onClick={changeUnitToFahrenheit}
          >
            °F
          </button>
        </sup>
      );
    } else {
      return (
        <sup>
          <button
            type="button"
            className="btn btn-link"
            onClick={changeUnitToClesius}
          >
            °C
          </button>
          | °F
        </sup>
      );
    }
  }

  return showTemperature(temperature, tempUnit);
}
