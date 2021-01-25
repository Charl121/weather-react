import React from "react";
import "./Cityinfo.css";

import Temperature from "./Temperature";
import CelciusToFahrenheit from "./CelciusToFahrenheit";

export default function () {
  return (
    <div className="row" id="current-weather">
      <div className="header">
        <h1 id="current-city">
          <strong> Tokyo </strong>
        </h1>
        <div className="row currentTemp">
          <div className="col-6">
            <Temperature value={28} />
          </div>
          <div className="col-6 fahrenheitLink">
            <CelciusToFahrenheit />
          </div>
        </div>
      </div>

      <div className="col-7">
        <ul className="detailedWeather">
          <li className="humidity"> Humidity: 20% </li>
          <li className="wind"> Wind: 1m/s </li>
          <li className="description"> Partly Cloudy </li>
        </ul>
      </div>
      <h3 id="current-time">Tuesday 19:25</h3>
    </div>
  );
}
