import React, { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
  const [currentValue, setValue] = useState(initialValue);

  const handleClickMinusOne = () => {
    setValue(currentValue - 1);
  };

  const handleClickPlusOne = () => {
    setValue(currentValue + 1);
  };

  const handleClickRemove = () => {
    console.log("Remove soon");
  };

  return (
    <div className="counter">
      <button onClick={handleClickMinusOne}> - </button>
      <span>{currentValue}</span>
      <button onClick={handleClickPlusOne}> + </button>
      <button onClick={handleClickRemove}> remove </button>
    </div>
  );
};

export default Counter;
