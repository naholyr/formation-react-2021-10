import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    const value = this.state.value;
    const handleClickPlus = () => {
      this.setState({ value: value + 1 });
    };
    const handleClickMinus = () => {
      this.setState({ value: value - 1 });
    };
    return (
      <div className="counter">
        <button onClick={handleClickMinus}>-</button>
        <span>{value}</span>
        <button onClick={handleClickPlus}> + </button>
      </div>
    );
  }
}

export default Counter;
