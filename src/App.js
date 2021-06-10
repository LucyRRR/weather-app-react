import "./index.css";
import WeatherForm from "./WeatherForm.js";
import './App.css';
import Link from "./Link";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      <WeatherForm />
      <Link />
      </div>
    </div>
  );
}
