import React from "react";

const getRootStyle = () => ({
  backgroundColor: "pink",
});

class Counter extends React.Component {
  /*
  constructor(props) {
    super(props);

    this.state = { value: this.props.initialValue || 0 };

    this.handleClickIncrement = () => {
      this.setState({ value: this.state.value + 1 }); // { value: 1 }
      // ATTENTION: nouveau state dépend de ancien state => préférer la version fonction
      this.setState((state) => ({ value: state.value + 1 })); // state => ({ value: state.value + 1 })
    };
  }
  */

  static defaultProps = {
    initialValue: 0,
  };

  state = { value: this.props.initialValue, other: "value" };

  // Fixed this
  handleClickIncrement = () => {
    this.setState({ value: this.state.value + 1 }); // { value: 1 }
    // ATTENTION: nouveau state dépend de ancien state => préférer la version fonction
    this.setState((state) => ({ value: state.value + 1 })); // state => ({ value: state.value + 1 })
  };

  render() {
    const currentValue = this.state.value;
    const rootStyle = getRootStyle();

    return (
      <div className="Counter" style={rootStyle}>
        <span>{currentValue}</span>
        <button onClick={this.handleClickIncrement}>⬆</button>
      </div>
    );
  }
}

export default Counter;
