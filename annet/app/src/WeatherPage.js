import CitySelector from "./CitySelector";
import WeatherWidget from "./WeatherWidget";
import { useState } from "react";

const WeatherPage = () => {
  const [city, setCity] = useState();

  const handleCityChange = ({ target: { value } }) => {
    setCity(value);
  };

  return (
    <div className="WeatherPage">
      <CitySelector onChange={handleCityChange} />
      <br />
      <WeatherWidget city={city} />
    </div>
  );
};

export default WeatherPage;
