import Counter from "./Counter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCounter } from "./store";
/*

1. Naissance ([nbCounters] = [0])
  - pas de cleanup (première exécution)
  - originalTitle = "Nicolas App"
  - document.title = "0 compteur(s)"

2. Update ["1"] ([nbCounters] = [1] ≠ [0] => trigger)
  - cleanup: document.title = originalTitle ("Nicolas App")
  - originalTitle = "Nicolas App"
  - document.title = "1 compteur(s)"

Effet externe: document.title = "Toto"

3. Update ["1", "2"] ([nbCounters] = [2] ≠ [1] => trigger)
  - cleanup: document.title = originalTitle ("Nicolas App")
  - originalTitle = "Toto"
  - document.title = "2 compteur(s)"

4. Update ["1", "2"] (parent updated) ([nbCounters] = [2] == [2] => pas de trigger)

5. Destruction
  - cleanup: document.title = originalTitle ("Toto")

*/

const CounterList = ({ counterIndices = [], onRemove }) => {
  // Side-effect: document.title = nb compteurs
  const nbCounters = counterIndices.length;

  const dispatch = useDispatch();

  const removeOneCounter = (id) => {
    // const newIndices = counterIds.filter((oldIndex) => oldIndex !== index);
    // setcounterIds(newIndices);
    dispatch(removeCounter(id));
  };

  useEffect(() => {
    // Setup
    const originalTitle = document.title;
    if (nbCounters > 0) {
      document.title = nbCounters + " compteur(s)";
    }
    // Cleanup
    return () => {
      document.title = originalTitle;
    };
  }, [nbCounters]);

  // Side-effect: only on creation
  useEffect(() => {
    console.log("didMount");
  }, []);
  // Side-effect: only on destroy
  useEffect(() => {
    return () => {
      console.log("willUnmount");
    };
  }, []);
  // Side-effect: only on creation/destroy
  useEffect(() => {
    console.log("didMount");
    return () => {
      console.log("willUnmount");
    };
  }, []);

  // Side-effect: call external API

  const renderCounterItem = (index) => {
    return (
      <li key={index}>
        <Counter />
        <button onClick={() => removeOneCounter(index)}>➖</button>
      </li>
    );
  };

  return <ul>{counterIndices.map(renderCounterItem)}</ul>;
};

export default CounterList;
