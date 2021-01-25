import React from "react";
import "./FiveDayForecast.css";
import Temperature from "./Temperature";

export default function FiveDayForecast(props) {
  return (
    <div className="fiveDayForecast">
      <hr />
      <ul className="dayList">
        <li>
          <div className="row">
            <div className="day col">Tomorrow</div>
            <div className="weatherForecast col">
              <div className="row">
                <div className="col-1">
                  <Temperature value={23.6} />
                </div>
                <div className="col-3">
                  <i className="far fa-sun"></i>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="row">
            <div className="day col">Thursday</div>
            <div className="weather-forecast col">
              <div className="row">
                <div className="col-1">
                  <Temperature value={24} />
                </div>
                <div className="col-3">
                  <i className="far fa-sun"></i>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="row">
            <div className="day col-6">Friday</div>
            <div className="weather-forecast col-6">
              <div className="row">
                <div className="col-1">
                  <Temperature value={23} />
                </div>
                <div className="col-3">
                  <i className="fas fa-cloud"></i>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="row">
            <div className="day col-6">Saturday</div>
            <div className="weather-forecast col-6">
              <div className="row">
                <div className="col-1">
                  <Temperature value={25} />
                </div>
                <div className="col-3">
                  <i className="fas fa-cloud-sun"></i>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="row">
            <div className="day col-6">Sunday</div>
            <div className="weather-forecast col-6">
              <div className="row">
                <div className="col-1">
                  <Temperature value={22} />
                </div>
                <div className="col-3">
                  <i className="fas fa-cloud-showers-heavy"></i>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
