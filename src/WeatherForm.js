import React, { useState } from 'react';
import Loader from "react-loader-spinner";
import axios from "axios";
import './Weather.css';
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherForecast from "./WeatherForecast.js";
import './WeatherForm.css'; 




export default function WeatherForm(props) {
  Weather();
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({ ready: false});

  function handleResponse(response) {
    setWeather({
      coord: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
    setResult(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "9561e0b8516730d7561152d7deb2d27b";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
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

  if (result) {
    return (
      <div>
        {form}
         
          <ul className="WeatherList">
            <br/>
          <li>Temperature: <WeatherTemperature celsius={weather.temperature} /></li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
        <WeatherForecast coord={weather.coord}/>
      </div>
    );
  } else {
    return form;
  }
}

function Weather(){
    return(
        
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    )
}

