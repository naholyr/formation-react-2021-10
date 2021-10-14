import "./App.css";
import { useState } from "react";
import CounterList from "./CounterList";

const App = () => {
  const initialCounterIndices = [];
  const [counterIndices, setCounterIndices] = useState(initialCounterIndices);

  const addCounter = () => {
    setCounterIndices([...counterIndices, counterIndices.length + 1]);
  };

  return (
    <div className="App">
      <button onClick={addCounter}>➕</button>
      <hr />
      <CounterList counterIndices={counterIndices} />
    </div>
  );
};

export default App;
