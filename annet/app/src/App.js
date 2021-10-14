//import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter.js";
import React, { useState } from "react";

const App = () => {
  const counterIndices = [0, 1, 2];
  const [currentList, setList] = useState(counterIndices);

  const renderCounterItem = (index) => {
    return (
      <div>
        <Counter />
        <button onClick={removeMachin}>Remove counter</button>
      </div>
    );
  };
  const addMachin = () => {
    //const clone = [...currentList, currentList.length + 1];
    setList([...currentList, currentList.length + 1]);
    //setList([...currentList, Math.random()]);
  };
  const removeMachin = () => {
    //setList( );
  };
  return (
    <div className="App">
      <button onClick={addMachin}>Add new counter</button>
      <hr />
      {currentList.map(renderCounterItem)}
    </div>
  );
};

export default App;
