import "./App.css";
import { useState } from "react";
import CounterList from "./CounterList";

const CounterPage = () => {
  const initialCounterIndices = [1, 2, 3];
  const [counterIndices, setCounterIndices] = useState(initialCounterIndices);

  const addCounter = () => {
    setCounterIndices([Math.random(), ...counterIndices]);
  };

  const removeCounter = (index) => {
    const newIndices = counterIndices.filter((oldIndex) => oldIndex !== index);
    setCounterIndices(newIndices);
  };

  const resetCounters = () => {};

  return (
    <div className="counterpage">
      <button onClick={addCounter}>( + )</button>
      <button onClick={resetCounters}> Reset </button>
      <hr />
      <CounterList counterIndices={counterIndices} onRemove={removeCounter} />
    </div>
  );
};

export default CounterPage;
