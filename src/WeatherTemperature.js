import React from "react";
import "./Weather.css";
​
export default function WeatherTemperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
​
  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
​
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  
​
  if (props.unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <p>
          Temperature: {Math.round(props.celsius)}
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
            
          </span>
        </p>
      </div>
    );
  } else {
    return (
      <div className="weatherTemperature">
        <p>
          Temperature: {Math.round(fahrenheit())}
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </p>
              </div>
    );
  }
}