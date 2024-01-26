import axios from "axios";

export async function OpenWeatherAPICall(city) {
  const apiKey = "ff5efd6ccb32c688cc5cf4db3f84e813";
  const unit = "metric";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

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
  };

  return weatherDataObject;
}
