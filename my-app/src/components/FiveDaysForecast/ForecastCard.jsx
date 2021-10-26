import React from 'react'

export default function ForecastCard() {
    return (
        <div className="fivedays-forecast__main__item">
          <div className="fivedays-forecast__main__item__day">Tonight</div>
          <p className="fivedays-forecast__main__item__date">Jun 30</p>
          <img
            className="fivedays-forecast__main__item__img"
            src="http://openweathermap.org/img/wn/11d@2x.png"
            alt=""
          />
          <p className="fivedays-forecast__main__item__temp">25°C</p>
          <p className="fivedays-forecast__main__item__weater">Clear, Warm</p>
        </div>
    )
}
