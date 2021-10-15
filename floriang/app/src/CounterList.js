import Counter from "./Counter";
import { useEffect } from "react";

const CounterList = ({ counterIndicies, onRemoveByIndex }) => {
  const handleClickRemoveByIndex = (value) => {
    onRemoveByIndex(value);
  };

  const originalDocumentTitle = document.title;

  /*const newLength = counterIndicies;
  const previousLength = "????";*/
  useEffect(() => {
    /*if (previousLength < newLength) {
      console.log("oui");
    }
    if (previousLength > newLength) {
      console.log("non");
    }*/
    document.title = counterIndicies.length + " agent(s)";

    return () => {
      document.title = originalDocumentTitle;
    };
  }, [counterIndicies, originalDocumentTitle]);
  /*}, [previousLength, newLength]);*/

  const renderCounter = (index) => (
    <div className="counter-container" key={index}>
      <Counter key={index} initialValue={index} />
      <button
        className="remove"
        onClick={() => handleClickRemoveByIndex(index)}
      >
        X Retirer cet agent
      </button>
    </div>
  );

  return <>{counterIndicies.map(renderCounter)}</>;
};

export default CounterList;
