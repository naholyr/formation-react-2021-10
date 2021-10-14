import Counter from "./Counter";

const CounterList = ({ counterIndices = [] }) => {
  const renderCounterItem = (index) => {
    return (
      <div>
        <Counter />
        <button>➖</button>
      </div>
    );
  };

  return <>{counterIndices.map(renderCounterItem)}</>;
};

export default CounterList;
