import "./App.scss";
import CounterList from "./CounterList";
import React, { useState } from "react";

function App() {
  const [listCounters, updateList] = useState([0, 1, 2]);
  const addCounter = () => {
    updateList([...listCounters, Math.random()]);
  };
  const removeCounter = (index) => {
    const newListCounters = listCounters.filter(
      (oldIndex) => oldIndex !== index
    );
    updateList(newListCounters);
  };
  const resetAll = () => {
    updateList(listCounters.map(() => Math.random()));
  };

  return (
    <div className="App">
      <button onClick={addCounter}>Ajouter un compteur</button>
      <button onClick={resetAll} disabled={listCounters.length === 0}>
        Reset all
      </button>
      <br />
      <CounterList listCounters={listCounters} onRemove={removeCounter} />
    </div>
  );
}

export default App;
