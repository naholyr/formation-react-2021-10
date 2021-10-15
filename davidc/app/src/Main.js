import "./Main.scss";
import CountersPage from "./CountersPage";
import WeatherPage from "./WeatherPage";

function Main() {
  return (
    <div className="Main">
      <WeatherPage />
      <hr />
      <CountersPage />
    </div>
  );
}

export default Main;
