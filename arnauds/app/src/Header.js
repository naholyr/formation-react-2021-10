import "./App.scss";

const Header = ({ onChangePage }) => {
  const handleLink = (page) => (e) => {
    onChangePage(page);
  };
  return (
    <div className="Header">
      <a onClick={handleLink("home")} href="#home">
        [Home]
      </a>
      <a onClick={handleLink("counter")} href="#counter">
        [CounterPage ()]
      </a>
      <a onClick={handleLink("weather")} href="#weather">
        [Météo]
      </a>
    </div>
  );
};

export default Header;
