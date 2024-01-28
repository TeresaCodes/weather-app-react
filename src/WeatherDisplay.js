import React from "react";
import FormatDate from "./FormatDate.js";

export default function WeatherDisplay(props) {
  if (props.weatherData.ready) {
    return (
      <div className="WeatherData mt-3">
        <div className="header">
          <div className="row row-cols-1">
            <div className="col-md-auto">
              <h2 className="city-name">{props.weatherData.city}</h2>
            </div>
            <div className="row row-cols-1">
              <div className="col-md-auto">
                <span className="weather-description">
                  {props.weatherData.description}
                </span>
              </div>
            </div>
            <div className="row row-cols-1">
              <div className="col-md-auto">
                <span className="current-time">
                  Last updated: {FormatDate(props.weatherData.date)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col weather-icon">
            <img
              className="icon"
              src={props.weatherData.icon}
              alt={props.weatherData.description}
            />
          </div>
          <div className="WeatherTemperature col-6 temperature-view">
            <span className="temperature">{props.weatherData.temperature}</span>
            <span className="units ms-2">
              <sup>°C</sup>
            </span>
          </div>
          <div className="col other-view">
            Humidity: {props.weatherData.humidity} %
            <br />
            Wind: {props.weatherData.wind} m/s
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="WeatherData mt-3">Please enter a City...</div>;
  }
}
