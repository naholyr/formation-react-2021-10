import { useState } from "react";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  const [page, redirect] = useRouting();
  const handleChangePage = (page) => {
    redirect(page);
  };

  return (
    <div className="App">
      <Header onChangePage={handleChangePage} />
      <Main page={page} />
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
