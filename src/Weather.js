import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./BottomRow.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast ";
​
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
​
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      feel: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      iconUrl: `/visuals/${response.data.weather[0].icon}.png`,
      girlIcon: `/styles/${response.data.weather[0].icon}.png`,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
  }
​
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
​
  function handleCityChange(event) {
    setCity(event.target.value);
  }
​
  function search() {
    const apiKey = "9724f817a3ad04371bf18467e4cb2880";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
​
  function currentLocation(position) {
    const apiKey = "9724f817a3ad04371bf18467e4cb2880";
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function showCurrentLocation(event) {
    navigator.geolocation.getCurrentPosition(currentLocation);
  }
​
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-2">
            <img
              className="girlIcon"
              src={weatherData.girlIcon}
              alt={weatherData.description}
              width="200"
            />
          </div>
          <div className="col-xs-10 col-centered">
            <form id="search-form" onSubmit={handleSubmit}>
              <div className="input-icon">
                <input
                  type="text"
                  placeholder="Enter a city..."
                  className="city-input"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <div className="search-btn">
                  <button type="button" onClick={showCurrentLocation}>
                    <i className="fas fa-map-marker-alt"></i>
                  </button>
                </div>
              </div>
              <button type="submit" className="laceSearch">
                Search
              </button>
            </form>
            <div className="row">
              <div className="col-6">
                <div className="mainInfo">
                  <WeatherTemperature
                    celsius={weatherData.temperature}
                    unit={unit}
                    setUnit={setUnit}
                  />
                  <p>Feels like: {weatherData.feel}°</p>
                  <p>Humidity: {weatherData.humidity}%</p>
                  <p>Description: {weatherData.description}</p>
                  <p>Wind: {weatherData.wind} km/h</p>
                </div>
              </div>
              <div className="col-6">
                <p>
                  {" "}
                  <img
                    src={weatherData.iconUrl}
                    width="100"
                    alt={weatherData.description}
                    className="centerPicture"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3 col-centered">
            <p className="cityName">{weatherData.city}</p>
            <p className="currentDate">
              Last updated: <FormattedDate date={weatherData.date} />{" "}
            </p>
          </div>
​
          <div className="col-xs-9 col-centered">
            <WeatherForecast city={weatherData.city} unit={unit} />
          </div>
        </div>
      </div>
    );
  } else {
    const defaultCity = "New York";
    const apiKey = "9724f817a3ad04371bf18467e4cb2880";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}