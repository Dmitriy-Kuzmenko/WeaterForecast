import React from "react";
import { useState } from "react";
import NearbyPlaces from "../NearbyPlaces/NearbyPlaces";
import TodayWeather from "../TodayWeather/TodayWeather";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  const [selectedPage, setSelectedPage] = useState(true);

  console.log(selectedPage);
  return (
    <>
      <div className="page-select">
        <button
          className={`page-select__btn ${selectedPage ? "active" : ""}`}
          onClick={() => setSelectedPage(true)}
        >
          Today
        </button>
        <button
          className={`page-select__btn ${!selectedPage ? "active" : ""}`}
          onClick={() => setSelectedPage(false)}
        >
          5-day forecast
        </button>
      </div>
      <TodayWeather></TodayWeather>
      <NearbyPlaces/>
    </>
  );
}
