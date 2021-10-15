import WeatherPage from "./WeatherPage";
import CounterPage from "./CounterPage";

const Main = ({ page }) => {
  return (
    <div className="App">
      {page === "weather" && <WeatherPage />}
      {page === "counter" && <CounterPage />}
      {page === "default" && "Bienvenue étranger. Fais ton choix ;)"}
    </div>
  );
};

export default Main;
