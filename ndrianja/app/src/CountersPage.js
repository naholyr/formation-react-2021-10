import "./App.scss";
import CounterList from "./CounterList";

function App() {
  return (
    <div className="CountersPage">
      <CounterList initialValue={[]} />
    </div>
  );
}

export default App;
