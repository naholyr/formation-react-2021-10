import NavLink from "./NavLink";
import { useSelector } from "react-redux";

const Header = () => {
  const counterIndices = useSelector((state) => state.counterIds);
  const counterNumbers = counterIndices.length;

  return (
    <header className="App">
      [<NavLink page="home">Home</NavLink>] [
      <NavLink page="counters">Counters {counterNumbers}</NavLink>] [
      <NavLink page="weather">Weather</NavLink>]
    </header>
  );
};

export default Header;
