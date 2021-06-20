import React, { useState } from 'react';
import WeatherDate from "./WeatherDate.js";
import axios from "axios";
import './Weather.css';
import WeatherForecast from "./WeatherForecast.js";


export default function WeatherForm(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [result, setResult] = useState({ ready: false });
  const [weather, setWeather] = useState({});

  function showTemperature(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "9561e0b8516730d7561152d7deb2d27b";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
    );
    <div><WeatherForecast coordinates={result.coordinates} />
    </div>
  

  if (result) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <WeatherDate date={props.data.date} /> </li>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}


