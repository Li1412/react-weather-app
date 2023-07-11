import React from "react";
import Weather from "./weather";
import "./App.css";

export default function App() {
return (
    <div className="App">
      <div className="container">
    <Weather defaultCity="Johannesburg" />

     <footer>
  This project is coded by Lindelwa Tshuku and is{" "} <a href="https://github.com/Li1412/react-weather-app" target="_blank" rel="noopener noreferrer">
     open-sourced on Github</a>
    </footer>
    </div>
    </div>
  );
}  
        

