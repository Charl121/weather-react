import React from "react";
import Temperature from "./Temperature";

export default function celciusToFahrenheit(props) {
  function convertFahrenheit(event) {
    event.preventDefault();
    let temp = (<Temperature /> * 9) / 5 + 32;
    alert("The temperature in fahrenheit is ${Math.round(temp)}°F");
  }
  return (
    <div>
      | {""}
      <a href="/" onClick={convertFahrenheit}>
        {" "}
        °F
      </a>
    </div>
  );
}