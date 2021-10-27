import React from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import NearbyPlaces from "../NearbyPlaces/NearbyPlaces";

import "./TodayWeather.css";

export default function TodayWeather(props) {

  return (
    <div>
      <CurrentWeather weaterInfo={props.weaterInfo}/>
      <HourlyForecast location={props.weaterInfo.coord}/>
      <NearbyPlaces location={props.weaterInfo.coord}/>
    </div>
  );
}
