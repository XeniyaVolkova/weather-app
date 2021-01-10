import React from "react";
import "./Weather.css";
import "./BottomRow.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    description: "Cloudy",
    feel: 18,
    wind: 3,
    humidity: 10
  };

  return (
    <div className="Weather">
      <div className="row">
        <div className="col-2">
          <img
            src="https://static.wixstatic.com/media/3688c9_adc96acbe63b45778c2273ab6768fba3~mv2.png"
            width="250"
          />
        </div>
        <div className="col-xs-10 col-centered">
          <form>
            <div className="input-icon">
              <input
                type="text"
                placeholder="Enter a city..."
                className="search"
                autoComplete="off"
              />
              <div className="search-btn">
                <button type="button">
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
                <p>19°C|°F</p>
                <p>{weatherData.description}</p>
                <p>Feels like: {weatherData.feel}°C</p>
                <p>Wind: {weatherData.wind} Km/h</p>
                <p>Humidity: {weatherData.humidity}%</p>
              </div>
            </div>
            <div className="col-6">
              <img
                className="centerPicture"
                src="https://static.wixstatic.com/media/3688c9_ca89456f9c5f4fffba53ee040c1bdc03~mv2.png"
                width="150"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-xs-3 col-centered">
          <p className="cityName">{weatherData.city}</p>
          <p className="currentDate">Last updated: 18:00</p>
          <p className="currentTime">Monday, 17:00</p>
        </div>

        <div class="col-9">
          <div className="row no-gutters" className="weather-forecast"></div>
        </div>
      </div>
    </div>

  );
}
