import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import React, { useState } from "react";

function App() {
  const counters = [0, 1, 2];
  const [list, updateList] = useState(counters);
  const addCounter = () => {
    updateList([...list, list.length + 1]);
  };
  const removeCounter = (index) => {
    list.splice(index, 1);
    console.log(list);
    updateList(list);
  };
  const renderCounterItem = (index) => {
    return (
      <div>
        <Counter />
        <button onClick={() => removeCounter(index)}>remove</button>
      </div>
    );
  };

  return (
    <div className="App">
      <button onClick={addCounter}>➕</button>
      <hr />
      {list.map(renderCounterItem)}
    </div>
  );
}

export default App;
