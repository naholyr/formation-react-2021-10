import "./App.css";
import CounterList from "./CounterList";

function App() {
  return (
    <div className="App">
      <CounterList counterNumbers={["1", "2", "3"]} />
    </div>
  );
}

export default App;
