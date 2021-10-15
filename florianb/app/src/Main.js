import "./Main.scss";
import CountersPage from "./CounterPage";
import WeatherPage from "./WeatherPage";
import HomePage from "./HomePage";
// import { store } from "./store";
// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const pages: Record<string, React$Component> = {
  counters: CountersPage,
  weather: WeatherPage,
  default: HomePage,
};

const Main = () => {
  // const [page, setPage] = useState(store.getState().page);
  // useEffect(() => {
  //   const unsubscribe = store.subscribe(() => {
  //     setPage(store.getState().page);
  //   });
  //   return unsubscribe;
  // }, []);

  const page = useSelector((state) => state.page);
  const PageComponent = pages[page] ?? pages.default;

  return (
    <main className="Main">
      <PageComponent />
    </main>
  );
};

export default Main;
