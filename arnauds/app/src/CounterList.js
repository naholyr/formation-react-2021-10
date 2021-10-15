import Counter from "./Counter";
import React, { useEffect } from "react";

const CounterList = ({ listCounters = [], onRemove }) => {
  const nbCounters = listCounters.length;
  useEffect(() => {
    const originalTitle = document.title;
    document.title = `Nb compteurs ${nbCounters}`;

    return () => {
      document.title = originalTitle;
    };
  }, [nbCounters]);
  const renderCounter = (index) => {
    const handleClickRemove = () => {
      onRemove(index);
    };
    return (
      <div key={index}>
        <Counter />
        <button onClick={handleClickRemove}>Supprimer</button>
      </div>
    );
  };

  return listCounters.map(renderCounter);
};

export default CounterList;
