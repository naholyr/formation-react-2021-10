import "./App.scss";

function Header({ onChangePage }) {
  const handleClick = (page) => (e) => {
    e.preventDefault();
    onChangePage(page);
  };

  return (
    <header className="Header">
      [
      <a href="#home" onClick={handleClick("home")}>
        Home
      </a>
      ] | [
      <a href="#counters" onClick={handleClick("counters")}>
        Counters
      </a>
      ] | [
      <a href="#weather" onClick={handleClick("weather")}>
        Weather
      </a>
      ]
    </header>
  );
}

export default Header;

/**
  <WeatherPage initialCity="Paris" />
      <hr />
      <CountersPage />
 */
