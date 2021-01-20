import React, {useState} from "react";
import "./Weather.css";


export default function WeatherTemperature(props){
const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
   
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  function feelFahrenheit() {
    return (props.celsiusFeel * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
    <div className="weatherTemperature">
        <p>Temperature: {Math.round(props.celsius)}
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
          <br />
          <p>Feels like: {props.celsiusFeel}°</p>
        </span>
        </p>
      </div>
    );
  } else {
    return (
     <div className="weatherTemperature">
        <p>Temperature: {Math.round(fahrenheit())}
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
       </p>
         <p>Feels like: {Math.round(feelFahrenheit())}°</p>
      </div>
    );
  }
}