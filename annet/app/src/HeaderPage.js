//import logo from "./logo.svg";
//import "./App.css";
//import Counter from "./Counter.js";
//import CounterList from "./CounterList.js";
//import React, { useState } from "react";

const HeaderPage = ({ onChangePage }) => {
  const handleClick = (page) => (e) => {
    onChangePage(page);
  };
  return (
    <header className="App">
      <a href="#home" onClick={handleClick("home")}>
        {" "}
        [ Home ]{" "}
      </a>
      <a href="#counters" onClick={handleClick("counters")}>
        {" "}
        [ Counters(Todo) ]{" "}
      </a>
      <a href="#weather" onClick={handleClick("weather")}>
        [ Weather ]
      </a>
      <hr />
    </header>
  );
};

export default HeaderPage;
