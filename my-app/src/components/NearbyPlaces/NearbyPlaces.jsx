import React from "react";
import NearbyCity from "./NearbyCity";
import "./NearbyPlaces.css";

export default function NearbyPlaces() {
  return (
    <div className="nearbyPlaces">
      <div className="nearbyPlaces__header block-title">
        <span className="nearbyPlaces__header__title">Nearby Places</span>
      </div>
      <div className="nearbyPlaces__main">
          <NearbyCity></NearbyCity>
      </div>
    </div>
  );
}
