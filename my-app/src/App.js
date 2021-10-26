import "./App.css";

import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
// import {kelvToCels} from './assets/tempTransform'

function App() {
  const [currentGeolocation, setCurrentGeolocation] = useState({
    lat: null,
    lon: null,
  });
  const [currentCity, setCurrentCity] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);

  // const test = ()=>{

  //   navigator.geolocation.getCurrentPosition((pos) => {
  //     setCurrentGeolocation((prev) => {
  //       prev.lat = pos.coords.latitude;
  //       prev.lon = pos.coords.longitude;
  //       return prev;
  //     });
  //     // console.log(currentGeolocation);
  //     // fetch(
  //       //   `http://api.openweathermap.org/data/2.5/weather?lat=${currentGeolocation.lat}&lon=${currentGeolocation.lon}&appid=9708505d6a2b16e9f7bd5444e6515310`
  //       // )
  //       //   .then((res) => res.json())
  //       //   .then((data) => setCurrentCity(data.name));
  //       //   console.log(currentCity);
  //     });
  //     console.log(currentGeolocation);
  //   }

  useEffect(() => {
    if(currentCity)
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=9708505d6a2b16e9f7bd5444e6515310`
      )
        .then((res) => res.json())
        .then((data) => setWeatherInfo(data));
    
  }, [currentCity]);

  
  return (
    <div className="container">
      <Header handleSearch={setCurrentCity}></Header>
      <WeatherInfo weaterInfo={weatherInfo}></WeatherInfo>
    </div>
  );
}

export default App;
