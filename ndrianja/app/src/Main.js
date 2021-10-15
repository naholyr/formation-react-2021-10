import CountersPage from "./CountersPage";
import WeatherPage from "./WeatherPage";
import HomePage from "./HomePage";
// import { store } from "./store";
// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const pages = {
  counters: CountersPage,
  weather: WeatherPage,
  default: HomePage,
};

const Main = () => {
  const page = useSelector((state) => state.page);

  const Page = pages[page] ?? pages.default;

  return (
    <main className="Main">
      <Page />
    </main>
  );
};

export default Main;
