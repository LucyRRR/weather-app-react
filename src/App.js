import "./index.css";
import WeatherForm from "./WeatherForm.js";
import './Weather.css';
import WeatherDate from "./WeatherDate.js";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <WeatherDate />
        
        <WeatherForm />
        <div className="link-code">
            
            
          Coded by <b>Lucia Rothova</b> and is open-sourced on
          <a className="Link" href="https://github.com/LucyRRR/weather-app-react"
          target="_blank" rel="noopener noreferrer"> GitHub</a>
        </div>
      </div>
    </div>
  );
}
