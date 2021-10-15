import NavLink from "./NavLink";

const Header = () => {
  return (
    <header>
      <ul>
        <NavLink page="home">Home</NavLink>
        <NavLink page="counter">Counter</NavLink>
        <NavLink page="weather">Weather</NavLink>
      </ul>
    </header>
  );
};

export default Header;
