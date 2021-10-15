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
      <WeatherWidget city={cityState} /> <br />
      <CitySelector callback={loadMeteo} defaultCity={initialCity} />
    </div>
  );
};
export default WeatherPage;
