const Header = ({ onChangePage }) => {
  const handleClick = (page) => (e) => {
    e.preventDefault();
    onChangePage(page);
  };

  return (
    <header className="App">
      [
      <a href="#home" onClick={handleClick("home")}>
        Home
      </a>
      ] [
      <a href="#counters" onClick={handleClick("counters")}>
        Counters (42 TODO)
      </a>
      ] [
      <a href="#weather" onClick={handleClick("weather")}>
        Weather
      </a>
      ]
    </header>
  );
};

export default Header;
