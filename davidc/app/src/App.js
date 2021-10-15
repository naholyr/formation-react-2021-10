import "./App.scss";
import CountersPage from "./CountersPage";
import WeatherPage from "./WeatherPage";

function App() {
  return (
    <div className="App">
      <WeatherPage />
      <hr />
      <CountersPage />
    </div>
  );
}

export default App;
