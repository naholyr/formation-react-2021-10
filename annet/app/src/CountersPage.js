//import logo from "./logo.svg";
import "./App.css";
//import Counter from "./Counter.js";
import CounterList from "./CounterList.js";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCounterBelow,
  addCounterAbove,
  resetAllCounters,
  removeCounter,
  removeAllCounters,
} from "./MyStore";

const CountersPage = () => {
  //const counterIndices = [0, 1, 2];
  //const [currentList, setList] = useState(counterIndices);
  const counterIndices = useSelector((state) => state.counterIds);
  const dispatch = useDispatch();
  //const generateId = () => Math.random();
  //const renderCounterItem = (index) => {
  //  return (
  //    <div key={index}>
  //      <Counter />
  //      <button onClick={removeMachin}>Remove counter</button>
  //    </div>
  //  );
  //};
  const handleClickAddBelow = () => {
    //setList([...currentList, generateId()]);
    dispatch(addCounterBelow());
  };

  const handleClickAddAbove = () => {
    //setList([generateId(), ...currentList]);
    dispatch(addCounterAbove());
  };
  const removeAllMachins = () => {
    //setList([]);
    dispatch(removeAllCounters());
  };
  const handleClickResetAll = () => {
    //setList(currentList.map(() => generateId()));
    dispatch(resetAllCounters());
  };
  const removeSelectedCounter = (index) => {
    //const newIndices = counterIndices.filter((oldIndex) => oldIndex !== index);
    //setList(newIndices);
    dispatch(removeCounter(index));
  };
  return (
    <div className="App">
      <button onClick={handleClickAddBelow}>Add new below</button>
      <button onClick={handleClickAddAbove}>Add new above</button>
      <button onClick={removeAllMachins}>Remove all</button>
      <button onClick={handleClickResetAll}>Reset all</button>
      <hr />
      <CounterList
        counterIndices={counterIndices}
        onRemove={removeSelectedCounter}
      />
    </div>
  );
};

export default CountersPage;
