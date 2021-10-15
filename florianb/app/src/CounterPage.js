import { useState } from "react";
import CounterList from "./CounterList";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, removeCounter, resetCounters } from "./store";

const generateId = () => Math.random();

const CountersPage = ({ children }) => {
  // const initialCounterIndices = [];
  // const [counterIndices, setCounterIndices] = useState(initialCounterIndices);

  const counterIndices = useSelector((state) => state.counterIds);
  const dispatch = useDispatch();

  const addOneCounter = () => {
    // setCounterIndices([generateId(), ...counterIndices]);
    dispatch(addCounter());
  };

  const removeOneCounter = (index) => {
    const newIndices = counterIndices.filter((oldIndex) => oldIndex !== index);
    // setCounterIndices(newIndices);
    dispatch(removeCounter(newIndices));
  };

  const resetAllCounters = () => {
    dispatch(resetCounters());
    // setCounterIndices(counterIndices.map(() => generateId()));
  };

  return (
    <div className="CountersPage">
      {children}
      <button onClick={addOneCounter} disabled={counterIndices.length >= 10}>
        ➕
      </button>
      {counterIndices.length > 0 && (
        <button onClick={resetAllCounters}>♻</button>
      )}
      <hr />
      <CounterList
        counterIndices={counterIndices}
        onRemove={removeOneCounter}
      />
    </div>
  );
};

export default CountersPage;
