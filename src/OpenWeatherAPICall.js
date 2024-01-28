import axios from "axios";

const apiKey = "ff5efd6ccb32c688cc5cf4db3f84e813";
const unit = "metric";

export async function OpenWeatherAPICall(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  try {
    const response = await axios.get(apiURL);
    const data = response.data;

    const weatherDataObject = {
      ready: true,
      city: data.name + ", " + data.sys.country,
      temperature: Math.round(data.main.temp),
      humidity: data.main.humidity,
      wind: data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      description: data.weather[0].description,
      date: data.dt,
      latitude: data.coord.lat,
      longitude: data.coord.lon,
    };

    return weatherDataObject;
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    }
    return { ready: false };
  }
}

export async function OpenWeatherForecastAPICall(latitude, longitude) {
  const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=${unit}`;

  const response = await axios.get(forecastURL);
  const data = response.data;

  const forecastWeatherDataObject = {
    ready: true,
    dailyForecast: data.daily,
  };

  return forecastWeatherDataObject;
}
