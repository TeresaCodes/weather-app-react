import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar.js";
import { OpenWeatherAPICall } from "./OpenWeatherAPICall.js";
import { OpenWeatherForecastAPICall } from "./OpenWeatherAPICall.js";
import WeatherDisplay from "./WeatherDisplay.js";
import Footer from "./Footer.js";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForecast from "./WeatherForecast.js";

export default function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [forecastWeatherData, setForecastWeatherData] = useState({
    ready: false,
  });

  const handleCitySearch = (city) => {
    setSelectedCity(city);
  };

  useEffect(() => {
    async function fetchWeatherData() {
      const data = await OpenWeatherAPICall(selectedCity);

      if (data.ready) {
        setWeatherData(data);

        const forecastData = await OpenWeatherForecastAPICall(
          data.latitude,
          data.longitude
        );
        if (forecastData.ready) {
          setForecastWeatherData(forecastData);
        }
      }
    }

    if (selectedCity) {
      fetchWeatherData();
    }
  }, [selectedCity]);

  return (
    <div className="App container">
      <h1 className="mt-5">Weather App React</h1>
      <SearchBar onSearch={handleCitySearch} />
      <WeatherDisplay city={selectedCity} weatherData={weatherData} />
      <WeatherForecast forecastWeatherData={forecastWeatherData} />
      <br />
      <Footer />
    </div>
  );
}
