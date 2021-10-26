import React from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import NearbyPlaces from "../NearbyPlaces/NearbyPlaces";

import "./TodayWeather.css";

export default function TodayWeather(weaterInfo) {
  return (
    <div>
      <CurrentWeather weaterInfo={weaterInfo.weaterInfo}/>
      <HourlyForecast />
      <NearbyPlaces location={weaterInfo.weaterInfo.coord}/>
    </div>
  );
}
