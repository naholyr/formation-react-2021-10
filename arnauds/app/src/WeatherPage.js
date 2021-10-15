import CitySelector from "./CitySelector";
import WeatherWidget from "./WeatherWidget";
import React, { useState } from "react";

const WeatherPage = () => {
  const [city, setCity] = useState("");
  const cityChange = ({ target }) => {
    setCity(target.value);
  };
  return (
    <div className="WeatherPage">
      <CitySelector onChange={cityChange} />
      <br />
      <WeatherWidget city={city} />
    </div>
  );
};

export default WeatherPage;
