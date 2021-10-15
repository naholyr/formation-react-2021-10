import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

const useRouting = (defaultPage = "home") => {
  const getFromHash = () => {
    const hash = document.location.hash?.substring(1);
    return hash ?? defaultPage;
  };

  const [page, setPage] = useState(getFromHash);

  const redirect = (page) => {
    document.location.hash = page;
    setPage(page);
  };

  window.addEventListener("hashchange", () => {
    setPage(getFromHash());
  });

  return [page, redirect];
};

export default App;
