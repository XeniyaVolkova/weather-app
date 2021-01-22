import React from "react";
import "./BottomRow.css";
export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  if (props.unit === "celsius") {
    return (
      <div>
        <h3>
          <div className="fiveDays">{hours()}</div>
        </h3>
        <div className="forecast-icons">
          <img
            src={`/visuals/${props.data.weather[0].icon}.png`}
            alt={props.data.weather[0].description}
            width="40"
          />
        </div>
        <div className="highs-lows ">
          {Math.round(props.data.main.temp_max)}° /{" "}
          {Math.round(props.data.main.temp_min)}°
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>
          <div className="fiveDays">{hours()}</div>
        </h3>
        <div className="forecast-icons">
          <img
            src={`/visuals/${props.data.weather[0].icon}.png`}
            alt={props.data.weather[0].description}
            width="40"
          />
        </div>
        <div className="highs-lows ">
          {Math.round((props.data.main.temp_max * 9) / 5 + 32)}° /{" "}
          {Math.round((props.data.main.temp_min * 9) / 5 + 32)}°
        </div>
      </div>
    );
  }
}