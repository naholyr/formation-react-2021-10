import React, { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
  const [currentValue, setValue] = useState(initialValue || 0);
  const handleClickIncrement = () => {
    setValue(currentValue + 1);
  };

  return (
    <div className="Counter">
      <span>{currentValue}</span>
      <button onClick={handleClickIncrement}>⬆</button>
    </div>
  );
};

export default Counter;
