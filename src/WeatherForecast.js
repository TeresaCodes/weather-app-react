import React from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import ForecastContainer from "./ForecastContainer";

export default function WeatherForecast(props) {
  let content;

  if (props.forecastWeatherData.ready) {
    content = props.forecastWeatherData.dailyForecast.map(function (
      dailyForecast,
      index
    ) {
      if (index > 1 && index < 7) {
        return (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
        );
      } else {
        return null;
      }
    });
  } else {
    content = <span className="text-center">Please enter a City...</span>;
  }

  return <ForecastContainer>{content}</ForecastContainer>;
}
