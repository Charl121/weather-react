import React from "react";

export default function Temperature(props) {
  let roundedTemperature = Math.round(props.value);
  return <div className="temperature">{roundedTemperature}°C</div>;
}