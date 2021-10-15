import "./App.scss";
import CountersPage from "./CountersPage.js";
import WeatherPage from "./WeatherPage";

function App() {
  return (
    <div className="App">
      <WeatherPage initialCity="Paris" />
      <hr />
      <CountersPage />
    </div>
  );
}

export default App;
