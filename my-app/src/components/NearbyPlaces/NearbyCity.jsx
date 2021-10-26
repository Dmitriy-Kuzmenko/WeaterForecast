import React from 'react';

const NearbyCity = () => {
    return (
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
    );
}

export default NearbyCity;
