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

  function handleCityData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  if (props.city) {
    return (
      <ul className="WeatherData">
        <li>City: {weatherData.city}</li>
        <li>Temperature: {weatherData.temperature}°C</li>
        <li>Description: {weatherData.description}</li>
        <li>Humidity: {weatherData.humidity}%</li>
      </ul>
    );
  } else {
    return <div className="WeatherData">Waiting on input...</div>;
  }
}
