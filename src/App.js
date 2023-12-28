import "./styles.css";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
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
