function Header({ onChangePage }) {
  const handleClick = (page) => (e) => {
    onChangePage(page);
  };
  return (
    <div className="Header">
      <a href="#home" onClick={handleClick("home")}>
        Home
      </a>
      |
      <a href="#counters" onClick={handleClick("counter")}>
        Counters
      </a>
      |
      <a href="#weather" onClick={handleClick("weather")}>
        WeatherPage
      </a>
    </div>
  );
}

export default Header;
