import React from "react";
import "./BottomRow.css";


function temperature() {
let maxTemperature = Math.round(props.data.main.temp_max);
let minTemperature = Math.round(props.data.main.temp_min);
if (props.unit === "fahrenheit") {
maxTemperature = Math.round((maxTemperature *9)/5 +32);
minTemperature = Math.round((minTemperature * 9)/5 + 32);
}
return (
<div className="temperature">
 {maxTemperature}° / {minTemperature}°</div>
);
}
return(
<div className="WeatherForecastPreview col">
<h3>
<div className="fiveDays">
 {hours()}
  </div>
</h3>
<div className="forecast-icons">
<img src={`/visuals/${props.data.weather[0].icon}.png`} alt={props.data.weather[0].description} width="40" />
</div>
<div className="highs-lows">
  <span>
{temperature()}
</span>
</div>
</div>
)
