import "./styles.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App React</h1>
      <Weather />
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
