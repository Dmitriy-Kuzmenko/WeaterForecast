import React from "react";
import { useEffect ,useState} from "react";
import './HourlyForecast.css'
import HourlyForecastItem from "./HourlyForecastItem";

export default function HourlyForecast() {

  const [hourlyForecast, setHourlyForecast] = useState([]);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=daily,minutely&appid=9708505d6a2b16e9f7bd5444e6515310`
    )
      .then((res) => res.json())
      .then((data) => setHourlyForecast(data.hourly));
  }, []);
  return (
    <div className="hourlyForecast">
      <div className="hourlyForecast__header block-title">
        <span className="hourlyForecast__header__title">Hourly</span>
      </div>
      <div className="hourlyForecast__main">
        <HourlyForecastItem hourInfo={{}}/>
      </div>
    </div>
  );
}
