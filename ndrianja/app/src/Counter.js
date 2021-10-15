import React, { useState } from "react";

const Counter = ({ initialValue = 0, onRemove }) => {
  const [currentValue, setValue] = useState(initialValue);
  const handleClickIncrement = () => {
    setValue(parseInt(currentValue) + 1);
  };

  const handleClearCounter = () => {
    setValue(0);
  };

  return (
    <div className="Counter">
      <span> {currentValue}</span>
      <button onClick={handleClickIncrement}>Up</button>
      <button onClick={handleClearCounter}>Clear</button>
      <button onClick={onRemove}>Del</button>
    </div>
  );
};

export default Counter;
