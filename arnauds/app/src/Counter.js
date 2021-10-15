import React, { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
  const [currentValue, setValue] = useState(initialValue || 0);
  const handleClickIncrement = () => {
    setValue(currentValue + 1);
  };
  const handleClickDecrement = () => {
    setValue(currentValue - 1);
  };
  const handleClickReset = () => {
    setValue(initialValue);
  };
  return (
    <div className="Counter">
      <span>{currentValue}</span>
      <button onClick={handleClickIncrement}>+</button>
      <button onClick={handleClickDecrement}>-</button>
      <button onClick={handleClickReset}>reset</button>
    </div>
  );
};

export default Counter;
