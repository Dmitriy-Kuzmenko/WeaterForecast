import React from "react";
import './HourlyForecast.css'
import HourlyForecastItem from "./HourlyForecastItem";

export default function HourlyForecast() {
  return (
    <div className="hourlyForecast">
      <div className="hourlyForecast__header block-title">
        <span className="hourlyForecast__header__title">Hourly</span>
      </div>
      <div className="hourlyForecast__main">
        <HourlyForecastItem/>
      </div>
    </div>
  );
}
