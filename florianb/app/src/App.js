import "./App.css";
// import { useState } from "react";
// import CounterPage from "./CounterPage";
import WeatherPage from "./WeatherPage";

const bodyStyle = {
  backgroundColor: "skyblue",
  padding: "60px",
};

const App = () => {
  return (
    <div className="app" style={bodyStyle}>
      <WeatherPage />
    </div>
  );
};

export default App;
