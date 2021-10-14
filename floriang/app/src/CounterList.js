import React, { useState } from "react";
import Counter from "./Counter";

const CounterList = ({ initialCounterIndicies = [] }) => {
  const [currentCounterIndicies, updateCounterIndicies] = useState(
    initialCounterIndicies
  );

  const currentIndex = currentCounterIndicies.length + 1;

  const handleClickAdd = () => {
    updateCounterIndicies([...currentCounterIndicies, currentIndex]);
  };

  const handleClickRemoveAll = () => {
    updateCounterIndicies([]);
  };

  const handleClickRemoveByIndex = () => {
    updateCounterIndicies(currentCounterIndicies.splice(currentIndex, 1));
    console.log(currentCounterIndicies);
    console.log(currentIndex);
  };

  const renderCounter = () => (
    <>
      <Counter initialValue={117} />
      <button onClick={handleClickRemoveByIndex}>X Retirer cet agent</button>
    </>
  );

  return (
    <>
      <button onClick={handleClickAdd}>+ Assigner un nouvel agent</button>
      <button onClick={handleClickRemoveAll}>
        - Supprimer tous les agents
      </button>
      <hr />
      <div>{currentCounterIndicies.map(renderCounter)}</div>
    </>
  );
};

export default CounterList;
