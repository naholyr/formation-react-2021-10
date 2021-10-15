import Counter from "./Counter";
import { useEffect } from "react";

const getCounterListItemStyle = () => ({
  listStyleType: "none",
  padding: "0",
  width: "100%",
  maxWidth: "300px",
  margin: "20px auto",
});

const getCounterListStyle = () => ({
  display: "flex",
  flexWrap: "wrap",
  margin: 0,
  padding: 0,
});

const CounterList = ({ counterIndices = [], onRemove }) => {
  const counterListItemStyle = getCounterListItemStyle();
  const counterListStyle = getCounterListStyle();

  useEffect(() => {
    const originalColor = document.body.style.backgroundColor;
    const randomColors = [
      "tomato",
      "deeppink",
      "antiquewhite",
      "cadetblue",
      "forestgreen",
    ];
    const randomNumber = Math.ceil(Math.random() * 4);
    const newColor = randomColors[randomNumber];
    document.body.style.backgroundColor = newColor;
    return () => {
      document.body.style.backgroundColor = originalColor;
    };
  }, [counterIndices]);

  const renderCounterItem = (index) => {
    return (
      <li key={index} style={counterListItemStyle}>
        <Counter />
        <button onClick={() => onRemove(index)}>Remove</button>
      </li>
    );
  };

  return (
    <ul style={counterListStyle}>{counterIndices.map(renderCounterItem)}</ul>
  );
};

export default CounterList;
