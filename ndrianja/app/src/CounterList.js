import React, { useState, useEffect } from "react";
import Counter from "./Counter";

const CounterList = ({ initialValue }) => {
  const [currentValue, setValue] = useState(initialValue);

  const handleCounterIncrement = () => {
    setValue([Math.random(), ...currentValue]);
  };

  const handleRemove = (index) => {
    setValue(currentValue.filter((x) => x !== index));
  };

  const renderCounterItem = (index) => {
    return (
      <div key={index}>
        <Counter initialValue="0" onRemove={() => handleRemove(index)} />
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
      <button onClick={handleCounterIncrement}>Add</button>
      <hr />
      {currentValue.map(renderCounterItem)}
    </div>
  );
};

export default CounterList;
