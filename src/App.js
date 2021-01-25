import React from "react";
import "./App.css";
import Header from "./Header";
import HourlyForecast from "./HourlyForecast";
import FiveDayForecast from "./FiveDayForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <HourlyForecast />
      <FiveDayForecast />
      <Footer />
    </div>
  );
}