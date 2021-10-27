import React from "react";
import { useState } from "react";
import FiveDaysForecast from "../FiveDaysForecast/FiveDaysForecast";
import PageNotFound from "../PageNotFound/PageNotFound";
import TodayWeather from "../TodayWeather/TodayWeather";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {

  const [selectedPage, setSelectedPage] = useState(true);
  if (!props.weaterInfo) {
   return ( <PageNotFound/>)
  }
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
      {
        selectedPage?<TodayWeather weaterInfo={props.weaterInfo}/>:<FiveDaysForecast/>
      }
     
    </>
  );
}
