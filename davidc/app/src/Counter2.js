import React, { useState } from "react";

const Counter2 = ({ initialValue = 0 }) => {
  const [currentVal, setCurrentVal] = useState(initialValue);
  const handleClickincrement = () => {
    setCurrentVal(currentVal + 1);
  };
  const handleClickdecrement = () => {
    setCurrentVal(currentVal - 1);
  };
  return (
    <div>
      <button onClick={handleClickdecrement}>
        <strong>-</strong>
      </button>
      <span>{currentVal}</span>
      <button onClick={handleClickincrement}>
        <strong>+</strong>
      </button>
    </div>
  );
};

export default Counter2;
