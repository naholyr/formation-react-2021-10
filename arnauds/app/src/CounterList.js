import Counter from "./Counter";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNbCounters } from "./store";

const CounterList = ({ listCounters = [], onRemove }) => {
  const dispatch = useDispatch();
  dispatch(setNbCounters(listCounters.length));
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
