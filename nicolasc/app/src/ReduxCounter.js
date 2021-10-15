import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, resetCounter } from "./store";

const getRootStyle = () => ({
  backgroundColor: "pink",
});

const ReduxCounter = ({ id }) => {
  const value = useSelector((state) => state.counterValues[id]);

  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch(incrementCounter(id));
  };

  const handleClickReset = () => {
    dispatch(resetCounter(id));
  };

  const rootStyle = getRootStyle();

  return (
    <div className="Counter" style={rootStyle}>
      <span>{value}</span>
      <button onClick={handleClickIncrement}>⬆</button>
      <button onClick={handleClickReset}>♻</button>
    </div>
  );
};

export default memo(ReduxCounter);
