//import "./App.scss";
import CountersPage from "./CountersPage";
import WeatherPage from "./WeatherPage";
import HomePage from "./HomePage";

const MainPage = ({ page = "home" }) => {
  return (
    <main className="App">
      {page === "weather" && <WeatherPage />}
      <hr />
      {page === "counters" && <CountersPage />}
      <hr />
      {page === "home" && <HomePage />}
    </main>
  );
};

export default MainPage;
