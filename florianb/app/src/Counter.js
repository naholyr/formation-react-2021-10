import React, { useState } from "react";

// export default expression; // import variable from './path'
// export const var1 = .....; // import { var1 } from './path'
// export const var2 = .....; // import { var1, var2 as other } from './path'

const getCounterStyle = () => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "tomato",
});

// function Counter({ initialValue = 0 }) {
const Counter = ({ initialValue = 0 }) => {
  // const array = useState(props.initialValue);
  // const currentValue = array[0];
  // const setValue = array[1];
  const [currentValue, setValue] = useState(initialValue);

  // if initialValue is costly to evalue, do it only once
  // const [currentOther, setOther] = useState(
  //   () => /* very costly computation */ 42
  // );

  const handleClickIncrement = () => {
    setValue(currentValue + 1);
  };

  const handleClickDecrement = () => {
    setValue(currentValue - 1);
  };

  const handleClickReset = () => {
    setValue(initialValue);
  };

  const counterStyle = getCounterStyle();

  return (
    <div className="Counter" style={counterStyle}>
      <span>{currentValue}</span>
      <button onClick={handleClickIncrement}>( + )</button>
      <button onClick={handleClickDecrement}>( - )</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

export default Counter;
