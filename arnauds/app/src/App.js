import "./App.scss";
import Main from "./Main";
import Header from "./Header";
import React, { useState } from "react";

const App = () => {
  const [page, setPage] = useState("home");
  const handleChangePage = (page) => {
    setPage(page);
  };
  return (
    <div className="App">
      <Header onChangePage={handleChangePage} />
      <hr />
      <Main page={page} />
    </div>
  );
};

export default App;
