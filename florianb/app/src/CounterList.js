import React, { useState } from "react";
import Counter from "./Counter";

const CounterList = ({ counterNumbers }) => {
  const [currentCounterNumbers, setCounterNumbers] = useState(counterNumbers);

  const renderCounter = () => {
    return <Counter key={Math.random()} />;
  };

  const handleAddCounter = () => {
    setCounterNumbers([
      ...currentCounterNumbers,
      currentCounterNumbers.length + 1,
    ]);
  };

  return (
    <div>
      {currentCounterNumbers.map(renderCounter)}
      <button onClick={handleAddCounter}>Add counter</button>
    </div>
  );
};

export default CounterList;
