import { useState } from "react";
import CounterList from "./CounterList";

const generateId = () => Math.random();

const CountersPage = ({ children }) => {
  const initialCounterIndices = [];
  const [counterIndices, setCounterIndices] = useState(initialCounterIndices);

  const addCounter = () => {
    setCounterIndices([generateId(), ...counterIndices]);
  };

  const removeCounter = (index) => {
    const newIndices = counterIndices.filter((oldIndex) => oldIndex !== index);
    setCounterIndices(newIndices);
  };

  const resetCounters = () => {
    setCounterIndices(counterIndices.map(() => generateId()));
  };

  return (
    <div className="CountersPage">
      {children}
      <button onClick={addCounter} disabled={counterIndices.length >= 10}>
        ➕
      </button>
      {counterIndices.length > 0 && <button onClick={resetCounters}>♻</button>}
      <hr />
      <CounterList counterIndices={counterIndices} onRemove={removeCounter} />
    </div>
  );
};

export default CountersPage;
