import CounterList from "./CounterList";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, resetCounters } from "./store";

const CountersPage = () => {
  // const initialCounterIds = [];
  // const [counterIds, setcounterIds] = useState(initialCounterIds);
  const nbCounters = useSelector((state) => state.counterIds.length);

  const dispatch = useDispatch();

  const handleClickAdd = () => {
    // setcounterIds([generateId(), ...counterIds]);
    dispatch(addCounter());
  };

  const handleClickReset = () => {
    // setcounterIds(counterIds.map(() => generateId()));
    dispatch(resetCounters());
  };

  return (
    <div className="CountersPage">
      <button onClick={handleClickAdd} disabled={nbCounters >= 10}>
        ➕
      </button>
      {nbCounters > 0 && <button onClick={handleClickReset}>♻</button>}
      <hr />
      <CounterList />
    </div>
  );
};

export default CountersPage;
