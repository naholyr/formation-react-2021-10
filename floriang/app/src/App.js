import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  const [currentPage, setPage] = useState("default");

  const onClickEvent = (page) => {
    setPage(page);
  };

  return (
    <div className="app">
      <Header onClickEvent={onClickEvent} />
      <Main page={currentPage} />
    </div>
  );
};

export default App;
