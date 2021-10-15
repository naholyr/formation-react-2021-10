import "./App.scss";
import CountersPage from "./CountersPage";
import WeatherPage from "./WeatherPage";
import Home from "./Home";

const Main = ({ page = "home" }) => {
  return (
    <div className="Main">
      {page === "home" && <Home />}
      {page === "weather" && <WeatherPage />}
      {page === "counter" && <CountersPage />}
    </div>
  );
};

export default Main;
