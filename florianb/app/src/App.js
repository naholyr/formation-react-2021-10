import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

const appStyle = {
  margin: "60px auto",
  padding: "20px",
  width: "100%",
  maxWidth: "960px",
  border: "1px solid black",
};

const App = () => {
  const [page, setPage] = useState("home");
  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <div className="app" style={appStyle}>
      <h1>App</h1>
      <Header onChangePage={handleChangePage} />
      <Main page={page} />
    </div>
  );
};

export default App;
