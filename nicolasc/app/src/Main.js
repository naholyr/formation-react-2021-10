import "./Main.scss";
import CountersPage from "./CounterPage";
import WeatherPage from "./WeatherPage";
import HomePage from "./HomePage";

const pages = {
  counters: CountersPage,
  weather: WeatherPage,
  default: HomePage,
};

const Main = ({ page = "home" }) => {
  const Page = pages[page] ?? pages.default;
  return (
    <main className="Main">
      <Page />
    </main>
  );
};

export default Main;
