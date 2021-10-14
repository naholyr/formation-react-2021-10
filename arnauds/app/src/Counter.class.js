import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  handleClick = () => {
    const value = this.state.value;
    this.setState({ value: value + 1 });
  };
  render() {
    return (
      <div className="Counter">
        <span>{this.state.value}</span>
        <button onClick={this.handleClick}>⬆</button>
      </div>
    );
  }
}

export default Counter;
