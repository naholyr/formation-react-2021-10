import NavLink from "./NavLink";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const nbCounters = useSelector((state) => state.counterIds.length);
  const counterValues = useSelector((state) => state.counterValues);
  const sum = useMemo(
    () => Object.values(counterValues).reduce((a, b) => a + b, 0),
    [counterValues]
  );

  return (
    <header className="App">
      [<NavLink page="home">Home</NavLink>] [
      <NavLink page="counters">
        Counters ({nbCounters} → {sum})
      </NavLink>
      ] [<NavLink page="weather">Weather</NavLink>]
    </header>
  );
};

export default Header;
