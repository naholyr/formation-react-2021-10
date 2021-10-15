import "./App.scss";
import CountersPage from "./CountersPage.js";
import WeatherPage from "./WeatherPage";
import HomePage from "./HomePage";

function Main({ page = "home" }) {
  return (
    <main className="Main">
      {page === "home" && <HomePage />}
      {page === "weather" && <WeatherPage initialCity="Paris" />}
      {page === "counters" && <CountersPage />}
    </main>
  );
}

export default Main;
