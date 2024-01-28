import React from "react";

export default function ForecastContainer({ children }) {
  return (
    <div className="WeatherForecast mt-4">
      <div className="forecast fw-bold">Forecast</div>
      <div className="WeatherData-Forecast">
        <div className="row d-flex justify-content-between">{children}</div>
      </div>
    </div>
  );
}
