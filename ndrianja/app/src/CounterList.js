import React, { useState } from "react";
import Counter from "./Counter";

const CounterList = ({ initialValue }) => {
  const [currentValue, setValue] = useState(initialValue);
  const handleCounterIncrement = () => {
    //counterIndices.push(currentValue);
    //counterIndices.push(initialValue);
    //console.log((currentValue);
    //setValue(currentValue + 1);
    setValue([...currentValue, Math.random()]);
  };

  const renderCounterItem = (index) => {
    return (
      <div>
        <Counter />
      </div>
    );
  };

  return (
    <div className="App">
      <button onClick={handleCounterIncrement}>Add</button>
      <hr />
      {currentValue.map(renderCounterItem)}
    </div>
  );
};

export default CounterList;
