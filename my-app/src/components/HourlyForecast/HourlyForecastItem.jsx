import React from 'react'

export default function HourlyForecastItem() {
    return (
        <div className="hourlyForecast__main__items">
        <div className="hourlyForecast__main__items__title">Today</div>
    <img className="nearbyPlaces__main__city__img" src="http://openweathermap.org/img/wn/11d@2x.png" alt="" />

        <div className="hourlyForecast__main__items__forecast"><p>Forecast</p></div>
        <div className="hourlyForecast__main__items__temp"><p>Tepm (°C)</p></div>
        <div className="hourlyForecast__main__items__realFeel"><p>RealFeel</p></div>
        <div className="hourlyForecast__main__items__wind"><p>Wind (km/h)</p></div>
    </div>
    )
}
