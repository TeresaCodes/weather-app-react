import React from "react";
import FormatDay from "./FormatDate";

export default function WeatherForecastDay(props) {
  const temperatureMax = Math.round(props.data.temp.max);
  const temperatureMin = Math.round(props.data.temp.min);

  return (
    <div className="WeatherForecastDay">
      <div className="foreacast-day">
        <sub>{FormatDay(props.data.dt)[0]}</sub>
      </div>
      <div>
        <img
          className="icon-forecast"
          src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
          alt={props.data.description}
        />
      </div>
      <div className="temp">
        <sub>
          {temperatureMax}°{" "}
          <span className="text-secondary">{temperatureMin}°</span>
        </sub>
      </div>
    </div>
  );
}
