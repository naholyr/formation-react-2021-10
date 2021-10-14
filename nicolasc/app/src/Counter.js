import React, { useState } from "react";

// export default expression; // import variable from './path'
// export const var1 = .....; // import { var1 } from './path'
// export const var2 = .....; // import { var1, var2 as other } from './path'

const getRootStyle = () => ({
  backgroundColor: "pink",
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

  const rootStyle = getRootStyle();

  return (
    <div className="Counter" style={rootStyle}>
      <span>{currentValue}</span>
      <button onClick={handleClickIncrement}>⬆</button>
    </div>
  );
};

export default Counter;
