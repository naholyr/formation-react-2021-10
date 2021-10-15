import React from "react";

class Counter extends React.Component {
  originalTitle = document.title;
  setDocumentTitle() {
    document.title = `value = {this.state.value}`;
  }

  restoreDocumentTitle() {
    document.title = this.originalTitle;
  }
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.setDocumentTitle();
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    this.restoreDocumentTitle();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.value !== this.state.value) {
      this.setDocumentTitle();
    }
  }
  static defaultProps = {
    initialValue: 0,
  };

  state = { value: this.props.initialValue, other: "value" };
  render() {
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
