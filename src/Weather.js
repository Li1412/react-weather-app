import React, {  useState } from "react";
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
    icon:response.data.weather[0].icon,
    });
    }

    function handleSubmit(event) {
      event.preventDefault();
      search(city);
    }

    function handleCityChange(event) {
      setCity(event.target.value);
    }

    function search() {
     const apiKey  = "7633347349ec94a368e4a15d93744b30";
      let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}$units=metric`;
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
                type="button"
                value="Search"
                className="btn btn-warning w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        </div>
    );
} else {
  search();
return "Loading...";
  }
}
