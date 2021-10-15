import React, { useState } from "react";

const Counter = ({ initialValue }) => {
  const [currentValue, updateValue] = useState(initialValue);

  const handleClickIncrement = () => {
    updateValue(currentValue + 1);
  };

  const handleClickDecrement = () => {
    updateValue(currentValue - 1);
  };

  const handleClickReset = () => {
    updateValue(initialValue);
  };

  return (
    <div className="counter">
      <h2>
        Son matricule est : <strong>OSS {currentValue}</strong>
      </h2>
      {currentValue !== 117 && (
        <>
          <button onClick={handleClickIncrement}>
            Changer de matricule (+1)
          </button>
          <button onClick={handleClickDecrement}>
            Changer de matricule (-1)
          </button>
          <button className="reset" onClick={handleClickReset}>
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default Counter;
