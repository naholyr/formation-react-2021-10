import Counter from "./Counter";
import { useEffect } from "react";

const CounterList = ({ counterIndices = [], onRemove }) => {
  const nbCounters = counterIndices.length;
  useEffect(() => {
    const originalTitle = document.title;
    if (nbCounters > 0) {
      document.title = nbCounters + " compteur(s)";
    }

    return () => {
      document.title = originalTitle;
    };
  }, [nbCounters]);

  useEffect(() => {
    console.log("didMount");
  }, []);

  useEffect(() => {
    return () => {
      console.log("willUnmount");
    };
  }, []);

  useEffect(() => {
    console.log("didMount");
    return () => {
      console.log("willUnmount");
    };
  }, []);

  const renderCounterItem = (index) => {
    return (
      <li key={index}>
        <Counter />
        <button onClick={() => onRemove(index)}>➖</button>
      </li>
    );
  };

  return <ul>{counterIndices.map(renderCounterItem)}</ul>;
};

export default CounterList;
