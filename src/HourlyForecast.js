import React from "react";
import "./HourlyForecast.css";
import Time from "./Time";
import Temperature from "./Temperature";
import Percipitation from "./Percipitation";
export default function HourlyForecast() {
  return (
    <div className="todaysForecast">
      <hr />
      <div className="time-forecast row">
        <div className="col-2">
          <Time value="01:00" />
          <Temperature value={22} />
          <Percipitation value={10} />
        </div>
        <div className="col-2">
          <Time value="04:00" />
          <Temperature value={20} />
          <Percipitation value={30} />
        </div>
        <div className="col">
          <Time value="07:00" />
          <Temperature value={23} />
          <Percipitation value={33} />
        </div>
        <div className="col">
          <Time value="10:00" />
          <Temperature value={21.6} />
          <Percipitation value={33.9} />
        </div>
        <div className="col">
          <Time value="13:00" />
          <Temperature value={21.8} />
          <Percipitation value={40.8} />
        </div>
        <div className="col">
          <Time value="18:00" />
          <Temperature value={22.3} />
          <Percipitation value={36.1} />
        </div>

        <hr />
      </div>
    </div>
  );
}