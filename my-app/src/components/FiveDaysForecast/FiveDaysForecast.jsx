import React from "react";
import HourlyForecast from "../HourlyForecast/HourlyForecast";

import "./FiveDaysForecast.css";
import ForecastCard from "./ForecastCard";

export default function FiveDaysForecast() {
  return (
    <div className="fivedays-forecast">
      <div className="fivedays-forecast__main">
        <ForecastCard/>   
      </div>
      <HourlyForecast />
    </div>
  );
}
