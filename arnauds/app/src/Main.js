import "./App.scss";
import CountersPage from "./CountersPage";
import WeatherPage from "./WeatherPage";
import Home from "./Home";
import { useSelector } from "react-redux";

const Main = () => {
  const page = useSelector((state) => state.page);
  return (
    <div className="Main">
      {page === "home" && <Home />}
      {page === "weather" && <WeatherPage />}
      {page === "counter" && <CountersPage />}
    </div>
  );
};

export default Main;
