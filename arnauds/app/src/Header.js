import "./App.scss";
import NavLink from "./NavLink";
import { useSelector } from "react-redux";

const Header = () => {
  return (
    <header className="Header">
      [<NavLink page="home">Home</NavLink>] [
      <NavLink page="counter">
        Counter ({useSelector((state) => state.nbCounters)})
      </NavLink>
      ] [<NavLink page="weather">Weather</NavLink>]
    </header>
  );
};

export default Header;
