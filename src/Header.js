import React from "react";
import "./Header.css";
import Cityinfo from "./Cityinfo";
import Searchcityform from "./Searchcityform";
import Currentcitybutton from "./Currentcitybutton";

export default function Header() {
  return (
    <div className="Header">
      <div className="row" id="current-temperature">
        <div className="col-5">
          <Cityinfo />
        </div>

        <div className="col-6" id="buttons">
          <Searchcityform />

          <Currentcitybutton />
        </div>
      </div>
    </div>
  );
}
