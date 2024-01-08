import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherData(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  useEffect(() => {
    if (props.city) {
      const apiKey = "ff5efd6ccb32c688cc5cf4db3f84e813";
      const unit = "metric";
      let cityName = props.city;
      let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;
      axios.get(apiURL).then(handleCityData);
    }
  }, [props.city]);

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let hour = date.getHours();
    let minute = String(date.getMinutes()).padStart(2, "0");
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return [days[day], hour, minute];
  }

  function handleCityData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: formatDay(response.data.dt),
    });
  }

  if (props.city) {
    return (
      <div className="WeatherData">
        <div className="header mb-4">
          <div className="row row-cols-1">
            <div className="col-md-auto">
              <h2 className="city-name">{weatherData.city}</h2>
            </div>
            <div className="row row-cols-1">
              <div className="col-md-auto">
                <span className="weather-description">
                  {weatherData.description}
                </span>
              </div>
            </div>
            <div className="row row-cols-1">
              <div className="col-md-auto">
                <span className="current-time">
                  Last updated: {weatherData.date[0]}, {weatherData.date[1]}:
                  {weatherData.date[2]}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col weather-icon">
            <img
              className="icon"
              src={weatherData.icon}
              alt={weatherData.description}
            />
          </div>
          <WeatherTemperature temperature={weatherData.temperature} />
          <div className="col other-view">
            Humidity: {weatherData.humidity} %
            <br />
            Wind: {weatherData.wind} m/s
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="WeatherData">Please enter a City...</div>;
  }
}
