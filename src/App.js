import "./styles.css";
import WeatherSearch from "./WeatherSearch.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App container">
      <h1 className="mt-5">Weather App React</h1>
      <WeatherSearch />
      <br />
      <footer>
        <a
          href="https://github.com/TeresaCodes/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by <em>Teresa</em>
      </footer>
    </div>
  );
}
