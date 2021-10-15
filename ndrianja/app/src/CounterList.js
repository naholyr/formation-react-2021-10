import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { resetArray } from "./store";

const CounterList = ({ initialValue }) => {
  const counterArray = useSelector((state) => state.counterArray);
  const dispatch = useDispatch();

  const handleAddCounter = () => {
    dispatch(resetArray([Math.random(), ...counterArray]));
  };

  const handleRemoveCounter = (index) => {
    dispatch(resetArray(counterArray.filter((x) => index !== x)));
  };

  const handleClearCounter = () => {
    dispatch(resetArray([]));
  };

  const renderCounterItem = (index) => {
    return (
      <div key={index}>
        <Counter initialValue="0" onRemove={() => handleRemoveCounter(index)} />
      </div>
    );
  };

  useEffect(() => {
    //setup

    // cleanup
    return () => {};
  });

  return (
    <div className="CounterList">
      <button onClick={handleAddCounter}>Add</button>
      <button onClick={handleClearCounter}>Clear</button>
      <hr />
      {counterArray.map(renderCounterItem)}
    </div>
  );
};

export default CounterList;
