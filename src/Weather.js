import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import "./BottomRow.css";

export default function Weather() {
let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [feel, setFeel] =useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "9724f817a3ad04371bf18467e4cb2880";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) {
    setTemperature(Math.round(response.data.main.temp));
    setFeel(Math.round(response.data.main.feels_like));
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].main);
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
  }
    
  
if (temperature) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-2">
          <img
            src="https://static.wixstatic.com/media/3688c9_adc96acbe63b45778c2273ab6768fba3~mv2.png" alt="Girl"
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
                onChange={updateCity}
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
                <p>Temperature: {temperature}°C</p>
                <p>Feels like: {feel}°C</p>
          <p>Humidity: {humidity}%</p>
          <p>Description: {description}</p>
          <p>Wind: {wind} km/h</p>
          
              </div>
            </div>
            <div className="col-6">
              <p> <img src={iconUrl} alt={description} className="mainInfo" />
          </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-xs-3 col-centered">
          <p className="cityName">Astana</p>
          <p className="currentDate">Last updated: 18:00</p>
          <p className="currentTime">Monday, 17:00</p>
        </div>

        <div class="col-9">
         <div className="row no-gutters weather-forecast"></div>
        </div>
      </div>
    </div>

  );
  } else {
    return (
      <div className="Weather">
      <div className="row">
        <div className="col-2">
          <img
            src="https://static.wixstatic.com/media/3688c9_adc96acbe63b45778c2273ab6768fba3~mv2.png" alt="Girl"
            width="200"
          />
        </div>
        <div className="col-xs-10 col-centered">
          <form onSubmit={handleSubmit}>
            <div className="input-icon">
              <input
                type="text"
                placeholder="Enter a city..."
                className="search"
                autoComplete="off"
                autoFocus="on"
                onChange={updateCity}
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
                <p>Temperature: </p>
                <p>Feels like: </p>
          <p>Humidity: </p>
          <p>Description: </p>
          <p>Wind: </p>
          
              </div>
            </div>
            <div className="col-6">
                         </div>
          </div>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-xs-3 col-centered">
          <p className="cityName">Astana</p>
          <p className="currentDate">Last updated: 18:00</p>
          <p className="currentTime">Monday, 17:00</p>
        </div>

        <div class="col-9">
         <div className="row no-gutters weather-forecast"></div>
        </div>
      </div>
    </div>
    );
  }
}
