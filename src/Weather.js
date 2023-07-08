import React, {  useState } from "react";
import WeatherInfo from "./Weatherinfo"
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ready: false});
const [city, setCity] = useState(props.defaultCity);


function handleResponse(response) {
    setweatherData({
      ready:true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
  
    }

if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="button"
                value="Search"
                className="btn btn-warning w-100"
              />
            </div>
          </div>
        </form>{" "}
        <h1>{weatherData.city}</h1>
        <h3>Weather</h3>
        <ul>      
 <li>Thursday 10:30</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
src="https://www.istockphoto.com/photos/sun-emoji"
alt="Sunny"
className="float-left"
/>
<span className="temperature">
  {Math.round(weatherData.temperature)}
</span>{" "}
<span className="unit">°C</span>
</div>
</div>
<div className="col-6">
<ul>
<li>Precipitation: 5% </li>
<li>Humidity: {weatherData.humidity} </li>
<li>Wind: {weatherData.wind} km/h</li>
</ul>
</div>
</div>
</div>
);
} else {
 const apiKey  = "7633347349ec94a368e4a15d93744b30";
    let city = "Johannesburg";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}$units=metric`;
axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

