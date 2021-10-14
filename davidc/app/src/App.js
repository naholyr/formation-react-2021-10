import "./App.css";
// import Counter from "./Counter";
import Counter2 from "./Counter2";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([]);
  // const [counters = [0, 1,] 2, 3];
  const renderCounters = () => {
    return (
      <div className="row">
        <Counter2 /> | <button>Del</button>
      </div>
    );
  };

  const handleAddCounter = () => {
    // setCounters(counters.concat([counters.length + 1]));
    setCounters([...counters, counters.length + 1]);
  };

  return (
    <div className="App">
      <button onClick={handleAddCounter}>
        <strong>+</strong>
      </button>
      <hr />
      {counters.map(renderCounters)}
    </div>
  );
}

export default App;
