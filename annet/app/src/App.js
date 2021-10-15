//import "./App.scss";
import HeaderPage from "./HeaderPage";
import MainPage from "./MainPage";
import { useState } from "react";

const App = () => {
  const [visibleMain, toggleVisibleMain] = useState(false);
  const [page, setPage] = useState(
    document.location.hash?.substring(1) ?? "home"
  );

  const handleChangePage = (page) => {
    setPage(page);
  };
  return (
    <div className="App">
      <HeaderPage onChangePage={handleChangePage} />
      <MainPage page={page} />
    </div>
  );
};

export default App;
