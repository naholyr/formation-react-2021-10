import { useState } from "react";
import CitySelector from "./CitySelector";
import WeatherWidget from "./WeatherWidget";

const WeatherPage = () => {
  const [city, setCity] = useState();

  // Don't do this at home
  const handleSelectCity = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <div className="WeatherPage">
      <CitySelector onSelectCity={handleSelectCity} />
      <br />
      <WeatherWidget city={city} />
    </div>
  );
};

export default WeatherPage;
