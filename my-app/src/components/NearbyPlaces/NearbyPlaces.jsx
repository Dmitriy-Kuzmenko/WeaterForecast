import React from "react";
import "./NearbyPlaces.css";

export default function NearbyPlaces() {
  return (
    <div className="nearbyPlaces">
      <div className="nearbyPlaces__header">
        <span className="nearbyPlaces__header__title">Nearby Places</span>
      </div>
      <div className="nearbyPlaces__main">
          <div className="nearbyPlaces__main__city">
              <span className="nearbyPlaces__main__city__name">
                  London
              </span>
              <div className="nearbyPlaces__main__city__imgBox">
              <img className="nearbyPlaces__main__city__img" src="http://openweathermap.org/img/wn/11d@2x.png" alt="" />

              </div>
              <span className="nearbyPlaces__main__city__temp">
              29°C
              </span>
          </div>
          
      </div>
    </div>
  );
}
