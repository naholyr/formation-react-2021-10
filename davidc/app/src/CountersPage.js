import "./App.scss";
import Counter2 from "./Counter2";
import { useState, useEffect } from "react";

function CountersPage() {
  const [counters /* array of ids */, setCounters] = useState([]);
  const nbCounters = counters.length;
  // Side effect
  useEffect(() => {
    const originalTitle = document.title;
    if (nbCounters > 0) {
      document.title = nbCounters + "compteur(s)";
    }

    return () => {
      document.title = originalTitle;
    };
  }, [nbCounters]);

  // param value venant du .map
  // const renderCounter = (value /* counter id */) => {
  //   console.log("renderCounter", value);
  //   return (
  //     <div className="row" key={value}>
  //       <Counter2 /> => <button onClick={() => removeCounter(value)}>Del</button>
  //     </div>
  //   );
  // };

  // const removeCounter = (keyElem /* counter id */) => {
  //     console.log("remove", keyElem);
  //     const countFilter = counters.filter((elm) => elm !== keyElem);
  //     setCounters(countFilter);
  // };

  // param value venant du .map
  const renderCounter = (value /* counter id */) => {
    const style = {
      color: "red",
    };

    return (
      <div className="row" key={value}>
        <Counter2 keyName={value} />
        <button onClick={handleRemove(value)} style={style}>
          <strong>Del</strong>
        </button>
      </div>
    );
  };

  const handleRemove = (keyElem /* counter id */) => {
    return (e /* SyntheticEvent */) => {
      const countFilter = counters.filter((elm) => elm !== keyElem);
      setCounters(countFilter);
    };
  };

  const handleAddCounter = () => {
    setCounters([...counters, Math.random()]);
  };

  return (
    <div className="CountersPage">
      <button onClick={handleAddCounter}>
        <strong>+</strong>
      </button>
      <hr />
      {counters.map(renderCounter)}
    </div>
  );
}

export default CountersPage;
