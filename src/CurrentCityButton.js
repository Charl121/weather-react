import React from "react";
import "./Currentcitybutton.css";
export default function Currentcitybutton() {
  return (
    <div>
      <button
        className="currentLocationButton"
        type="click"
        id="current-city-button">
        Current Location
      </button>
    </div>
  );
}