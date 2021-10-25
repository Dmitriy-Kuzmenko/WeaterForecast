import React from "react";

import './CurrentWeather.css'

export default function CurrentWeather() {
  return (
    <div className="currentWeather">
      <div className="currentWeather__header">
        <span className="currentWeather__header__title">Current Weather</span>
        <span className="currentWeather__header__date">
          {new Date(1485762037).toLocaleDateString("en-GB").replace(/\//g, ".")}
        </span>
      </div>
      <div className="currentWeather__main">
          <div className="currentWeather__main__imgBox">
          <img src="http://openweathermap.org/img/wn/11d@2x.png" alt="" />
        <span className="currentWeather__main__imgBox__text">Sunny</span>
          </div>
          <div className="currentWeather__main__degrees">
              <span className="currentWeather__main__degrees__main">29°C</span>
              <span className="currentWeather__main__degrees__sub">Real Feel 30°C</span>
          </div>
          <div className="currentWeather__main__dayInfo">
              <p className="currentWeather__main__dayInfo__text">Sunrice: </p>
              <p className="currentWeather__main__dayInfo__text">Sunset:</p>
              <p className="currentWeather__main__dayInfo__text">Duration:</p>
          </div>
      </div>

      

    </div>
  );
}
