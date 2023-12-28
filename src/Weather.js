import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [cityName, setCityName] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);

  const apiKey = "ff5efd6ccb32c688cc5cf4db3f84e813";
  const unit = "metric";

  if (props.city) {
    function showCityData(response) {
      //console.log(response);
      setCityName(response.data.name);
      setTemperature(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
    }

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiURL).then(showCityData);
  }

  if (cityName) {
    return (
      <ul className="Weather">
        <li>City: {cityName}</li>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
      </ul>
    );
  } else {
    return <div className="Weather">Waiting on input...</div>;
  }
}
