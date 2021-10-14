import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 30,
    };
  }

  render() {
    const currentValue = this.state.value;
    const handleClickPlusOne = () => {
      this.setState({
        value: currentValue + 1,
      });
    };

    const handleClickMinusOne = () => {
      this.setState({
        value: currentValue - 1,
      });
    };

    return (
      <div className="counter">
        <button onClick={handleClickMinusOne}> - </button>
        <span>{currentValue}</span>
        <button onClick={handleClickPlusOne}> + </button>
      </div>
    );
  }
}

export default CounterClass;
