import "./App.css";

import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";

function App() {
  // const [currentGeolocation, setCurrentGeolocation] = useState({
  //   lat: null,
  //   lon: null,
  // });

  // navigator.geolocation.getCurrentPosition((pos) => {
  //   setCurrentGeolocation((prev) => {
  //     prev.lat = pos.coords.latitude;
  //     prev.lon = pos.coords.longitude;
  //     return prev;
  //   });
  // });

  // useEffect(() => {
  //   fetch(
  //     `api.openweathermap.org/data/2.5/weather?q=London&appid=9708505d6a2b16e9f7bd5444e6515310`
  //   ).then((res) => console.log(res.json()));
  //   // .then(data=>console.log(data))
  // }, [currentGeolocation]);

  // console.log("location", currentGeolocation);

  return (
    <div className="container">
      <Header></Header>
      <WeatherInfo></WeatherInfo>
    </div>
  );
}

export default App;
