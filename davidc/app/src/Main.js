import "./Main.scss";
import CountersPage from "./CountersPage";
import WeatherPage from "./WeatherPage";
import HomePage from "./HomePage";

// function Main() {
  
//   return (
//     <div className="Main">
//       <WeatherPage />
//       <hr />
//       <CountersPage />
//       <hr />
//       <HomePage />
//     </div>
//   );
// }

// export default Main;

import { useSelector } from "react-redux";

const pages = {
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

  const Page = pages[page] ?? pages.default;

  return (
    <main className="Main">
      <Page />
    </main>
  );
};

export default Main;


