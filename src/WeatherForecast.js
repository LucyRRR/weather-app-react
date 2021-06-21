import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }  

    let apiKey = "9561e0b8516730d7561152d7deb2d27b";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecas-day"> Thu    
                    </div> 
                    <WeatherIcon code="02n" size={36}/>
                        <div className="Weatherforecast-temps">
                            <span className="WeatherForecast-temps-max">
                    24°
                            </span>
                            <span className="WeatherForecast-temps-min">
                    17°
                            </span>
                        </div>
                    </div>
                </div>
            </div>   
    )
};