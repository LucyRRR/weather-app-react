import React, { useState} from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherforecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true); 
    }  

    if (loaded) {
        
        return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index) {
                    if (index < 5) {

                return (
                    <div className="col" key={index}>
                    <WeatherforecastDay data={dailyForecast} />
                    </div>
                );
                }
                })}
                
                </div>
            </div>   
    );

} else {
    let apiKey = "9561e0b8516730d7561152d7deb2d27b";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    
        return null;
}
}
    

    