import React, { useState } from "react";
import CitySelector from "./CitySelector";
import WeatherWidget from "./WeatherWidget";

const WeatherPage = ({ initialCity }) => {
  const [cityState, setCityState] = useState(initialCity);

  const loadMeteo = (param) => {
    setCityState(param);
  };

  return (
    <div className="WeatherPage">
      <CitySelector callback={loadMeteo} defaultCity={initialCity} />
      <br />
      <WeatherWidget city={cityState} />
    </div>
  );
};
export default WeatherPage;
