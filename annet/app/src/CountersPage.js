//import logo from "./logo.svg";
import "./App.css";
//import Counter from "./Counter.js";
import CounterList from "./CounterList.js";
import React, { useState } from "react";

const CountersPage = () => {
  const counterIndices = [0, 1, 2];
  const [currentList, setList] = useState(counterIndices);

  const generateId = () => Math.random();
  //const renderCounterItem = (index) => {
  //  return (
  //    <div key={index}>
  //      <Counter />
  //      <button onClick={removeMachin}>Remove counter</button>
  //    </div>
  //  );
  //};
  const addMachinBelow = () => {
    //const clone = [...currentList, currentList.length + 1];
    //setList([...currentList, currentList.length + 1]);
    setList([...currentList, generateId()]);
  };
  const addMachinAbove = () => {
    //const clone = [...currentList, currentList.length + 1];
    //setList([...currentList, currentList.length + 1]);
    setList([generateId(), ...currentList]);
  };
  const removeAllMachins = () => {
    setList([]);
  };
  const resetAllMachins = () => {
    setList(currentList.map(() => generateId()));
  };
  const removeCounter = (index) => {
    const newIndices = currentList.filter((oldIndex) => oldIndex !== index);
    setList(newIndices);
  };
  return (
    <div className="App">
      <button onClick={addMachinBelow}>Add new below</button>
      <button onClick={addMachinAbove}>Add new above</button>
      <button onClick={removeAllMachins}>Remove all</button>
      <button onClick={resetAllMachins}>Reset all</button>
      <hr />
      <CounterList counterIndices={currentList} onRemove={removeCounter} />
    </div>
  );
};

export default CountersPage;
