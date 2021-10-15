import CitySelector from "./CitySelector";
import WeatherWidget from "./WeatherWidget";
import { useState } from "react";

const WeatherPage = () => {
  const [currentCity, setCity] = useState();

  const onChangeCity = (city) => {
    setCity(city);
  };

  return (
    <div className="app">
      <CitySelector onChangeEvent={onChangeCity} />
      <br />
      <WeatherWidget city={currentCity} />
    </div>
  );
};

export default WeatherPage;
