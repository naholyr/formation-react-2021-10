import React, { useState } from "react";

const getRootStyle = () => ({
  backgroundColor: "yellow",
  foregroundColor: "red",
});

// function Counter({ initialValue = 0 }) {
const Counter = ({ initialValue = 0 }) => {
  const [currentValue, setValue] = useState(initialValue);

  const handleClickIncrement = () => {
    setValue(currentValue + 1);
  };

  const rootStyle = getRootStyle();

  return (
    <div className="Counter" style={rootStyle}>
      <button onClick={handleClickIncrement}> Test me </button>
      <span> {currentValue} </span>
    </div>
  );
};

export default Counter;
