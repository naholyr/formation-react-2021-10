import "./App.scss";
import CounterList from "./CounterList";

const CountersPage = () => {
  return (
    <div className="CountersPage">
      <CounterList initialValue={[]} />
    </div>
  );
};

export default CountersPage;
