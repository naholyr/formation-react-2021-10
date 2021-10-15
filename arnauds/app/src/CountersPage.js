import "./App.scss";
import CounterList from "./CounterList";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, removeCounter, resetAll } from "./store";

function CountersPage() {
  const dispatch = useDispatch();
  const listCounters = useSelector((state) => state.listCounters);
  const handleAddCounter = () => {
    dispatch(addCounter());
  };
  const handleRemoveCounter = (index) => {
    dispatch(removeCounter(index));
  };
  const handleResetAll = () => {
    dispatch(resetAll());
  };

  return (
    <div className="CountersPage">
      <button onClick={handleAddCounter}>Ajouter un compteur</button>
      <button onClick={handleResetAll} disabled={listCounters.length === 0}>
        Reset all
      </button>
      <br />
      <CounterList listCounters={listCounters} onRemove={handleRemoveCounter} />
    </div>
  );
}

export default CountersPage;
