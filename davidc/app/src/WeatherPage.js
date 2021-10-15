import CitySelector from "./CitySelector";
import WeatherWidget from "./WeatherWidget";
import { useState } from "react";
const WeatherPage = () => {
  const [cityselected, setCitySelected] = useState("");

  const handleChangeCity = (e) => {
    setCitySelected(e.target.value);
  };

  return (
    <div className="WeatherPage">
      <CitySelector onChange={handleChangeCity} />
      <hr />
      <WeatherWidget cityselected={cityselected} />
    </div>
  );
};

export default WeatherPage;
