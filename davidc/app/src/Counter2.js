import React, { useState } from "react";

const Counter2 = ({ initialValue = 0, keyName }) => {
  const [currentVal, setCurrentVal] = useState(initialValue);

  const handleClickincrement = () => {
    setCurrentVal(currentVal + 1);
  };

  const handleClickdecrement = () => {
    setCurrentVal(currentVal - 1);
  };

  const handleReset = () => {
    setCurrentVal(initialValue);
  };
  console.log("key", keyName);

  return (
    <div>
      <h1>{keyName}</h1>
      <button onClick={handleClickdecrement}>
        <strong>Remove</strong>
      </button>
      <span>{currentVal}</span>
      <button onClick={handleClickincrement}>
        <strong>Add</strong>
      </button>
      <button onClick={handleReset}>
        <strong>Reset</strong>
      </button>
    </div>
  );
};

export default Counter2;
