import React, {  useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity);


function handleResponse(response) {
    setWeatherData({ready:true,
      coordinates:response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    icon:response.data.weather[0].icon,
    });
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function handleCityChange(event) {
      setCity(event.target.value);
    }

    function search() {
     const apiKey  = "1dbf926d3b4417bf379db7043bec1047";
      let apiUrl  = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
     }

if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-warning w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <footer>
  This project is coded by Lindelwa Tshuku and is{" "} <a href="https://github.com/Li1412/react-weather-app" target="_blank" rel="noopener noreferrer">
     open-sourced on Github</a>
    </footer>
    </div>
    );
 } else {
  search();
return "Loading...";
  }
}
