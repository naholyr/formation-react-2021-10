import "./App.scss";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(
    document.location.hash?.substring(1) ?? "home"
  );

  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <Header onChangePage={handleChangePage} />
      <Main page={page} />
    </div>
  );
}

export default App;

/**
  <WeatherPage initialCity="Paris" />
      <hr />
      <CountersPage />
 */
