//import "./App.scss";
import CountersPage from "./CountersPage";
import WeatherPage from "./WeatherPage";
import HomePage from "./HomePage";
import { useSelector } from "react-redux";

const MainPage = () => {
  const page = useSelector((state) => state.page);

  return (
    <main className="App">
      {page === "weather" && <WeatherPage />}
      {page === "counters" && <CountersPage />}
      {page === "home" && <HomePage />}
    </main>
  );
};

export default MainPage;
