import React, { useState, useEffect } from "react";
import axios from "axios";

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
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      description: response.data.weather[0].description,
      date: formatDay(response.data.dt),
    });
  }

  if (props.city) {
    return (
      <div className="WeatherData">
        <div className="header">
          <div className="row">
            <div className="col-md-auto">
              <h2>{weatherData.city}</h2>
            </div>
            <div className="row">
              <div className="col-md-auto">{weatherData.description}</div>
            </div>
            <div className="row">
              <div className="col-md-auto">Last updated:</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img src={weatherData.icon} alt={weatherData.description} />
          </div>
          <div className="col">
            {weatherData.temperature}

            <sup>
              <a href="#" rel="noopener noreferrer">
                °C
              </a>
              |
              <a href="#" rel="noopener noreferrer">
                °F
              </a>
            </sup>
          </div>
          <div className="col">
            Humidity: {weatherData.humidity} %
            <br />
            Wind: {weatherData.wind} m/s
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="WeatherData">Waiting on input...</div>;
  }
}
