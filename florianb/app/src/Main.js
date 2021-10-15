import WeatherPage from "./WeatherPage";
import CounterPage from "./CounterPage";
import HomePage from "./HomePage";

const mainStyle = {
  padding: "20px",
  width: "100%",
  boxSizing: "border-box",
  border: "1px solid black",
  marginTop: "20px",
};

const Main = ({ page = "home" }) => {
  return (
    <main className="main" style={mainStyle}>
      <h2>Main</h2>
      {page === "home" && <HomePage />}
      {page === "counters" && <CounterPage />}
      {page === "weather" && <WeatherPage />}
    </main>
  );
};

export default Main;
