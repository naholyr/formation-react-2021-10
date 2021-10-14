import React, { useState } from "react";

const Counter = ({ initialValue = 117 }) => {
  const [currentValue, updateValue] = useState(initialValue);

  const handleClickIncrement = () => {
    updateValue(currentValue + 1);
  };

  const handleClickReset = () => {
    updateValue(initialValue);
  };

  const beautifulStyle = {
    border: "solid blue 1px",
    margin: "20px auto",
    width: "500px",
    padding: "20px",
  };

  return (
    <div className="counter" style={beautifulStyle}>
      <h2>
        Votre numéro est : OSS <strong>{currentValue}</strong>
      </h2>
      <button onClick={handleClickIncrement}>Augmenter de numéro</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

export default Counter;
