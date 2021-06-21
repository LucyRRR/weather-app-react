import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecas-day"> Thu    
                    </div> 
                    <WeatherIcon code="02n" size="36"/>
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