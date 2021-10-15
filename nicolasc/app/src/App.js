import { useEffect, useState } from "react";
import "./App.scss";
import CountersPage from "./CounterPage";
import WeatherPage from "./WeatherPage";

const App = () => {
  const [visibleWeather, toggleVisibleWeather] = useState(false);
  useEffect(() => {
    setTimeout(() => toggleVisibleWeather(false), 6000);
  }, []);

  return (
    <div className="App">
      {visibleWeather && <WeatherPage />}
      <hr />
      <CountersPage />
    </div>
  );
};

export default App;
