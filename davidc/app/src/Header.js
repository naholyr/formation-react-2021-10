import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="App">
      [<NavLink page="home">Home</NavLink>] [
      <NavLink page="counters">Counters (42 TODO)</NavLink>] [
      <NavLink page="weather">Weather</NavLink>]
    </header>
  );
};

export default Header;
