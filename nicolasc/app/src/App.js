import "./App.scss";
import CountersPage from "./CounterPage";
import WeatherPage from "./WeatherPage";

const App = () => {
  return (
    <div className="App">
      <WeatherPage />
      <hr />
      <CountersPage />
    </div>
  );
};

export default App;
