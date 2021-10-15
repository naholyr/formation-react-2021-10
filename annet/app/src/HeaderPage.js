import NavLink from "./NavLink";
import { useSelector } from "react-redux";
const HeaderPage = () => {
  //const countersIds = useSelector((state) => state.countersIds);
  const nbCounters = useSelector((state) => state.counterIds.length);
  //const nbCounters = countersIds.length;
  return (
    <header className="App">
      [<NavLink page="home">Home</NavLink>] [
      <NavLink page="counters">Counters ( {nbCounters}))</NavLink>] [
      <NavLink page="weather">Weather</NavLink>]
    </header>
  );
};

export default HeaderPage;
