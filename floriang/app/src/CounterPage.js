import "./App.css";
import React, { useState } from "react";
import CounterList from "./CounterList";

function App() {
  const counterIndicies = [117];

  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const [currentCounterIndicies, setCounterIndicies] =
    useState(counterIndicies);

  const handleClickAdd = () => {
    setCounterIndicies([getRandomNumber(118, 3000), ...currentCounterIndicies]);
  };

  const handleClickRemoveAll = () => {
    setCounterIndicies(counterIndicies);
  };

  const onRemoveByIndex = (index) => {
    const newCounterIndicies = currentCounterIndicies.filter(
      (oldIndex) => oldIndex !== index
    );
    setCounterIndicies(newCounterIndicies);
  };

  return (
    <div className="app">
      <h1>Florian G. (OSS' Generator)</h1>
      <img
        src="https://i1.sndcdn.com/artworks-000629410873-v5yzxd-t500x500.jpg"
        alt="oss117"
        className="oss117"
      />
      <button onClick={handleClickAdd}>+ Assigner un nouvel agent</button>
      <button className="remove" onClick={handleClickRemoveAll}>
        X Reset all
      </button>
      <CounterList
        counterIndicies={currentCounterIndicies}
        onRemoveByIndex={onRemoveByIndex}
      />
    </div>
  );
}

export default App;
