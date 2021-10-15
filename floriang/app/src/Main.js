import HomePage from "./HomePage";
import WeatherPage from "./WeatherPage";
import CounterPage from "./CounterPage";
import { useSelector } from "react-redux";

const Main = () => {
  const page = useSelector((state) => state.page);

  return (
    <div className="App">
      {page === "weather" && <WeatherPage />}
      {page === "counter" && <CounterPage />}
      {page === "home" && <HomePage />}
    </div>
  );
};

export default Main;
