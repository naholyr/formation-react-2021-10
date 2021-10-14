import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    const currentValue = this.state.value;
    const rootStyle = {
      backgroundColor: "pink",
    };
    const handleClick = () => {
      this.setState({ value: currentValue >= 10 ? 0 : currentValue + 1 });
    };
    const handlePower = () => {
      this.setState({
        value: currentValue > 0 ? currentValue * 3 : currentValue + 1,
      });
    };

    return (
      <div className="Counter" style={rootStyle}>
        <button onClick={handleClick}>Test Me if you dare </button>
        <button onClick={handlePower}>Power </button>
        <span> {currentValue}</span>
      </div>
    );
  }
}

export default Counter;
