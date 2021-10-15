import CitySelector from "./CitySelector";
import WeatherWidget from "./WeatherWidget";
import { useState } from "react";

const WeatherPage = () => {
  const [city, setCity] = useState();

  const onSelectUpdate = (city) => {
    setCity(city);
  };

  return (
    <div className="WeatherPage">
      <CitySelector onChange={onSelectUpdate} />
      <br />
      <WeatherWidget city={city} />
    </div>
  );
};

export default WeatherPage;
