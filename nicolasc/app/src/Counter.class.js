import React from "react";

function noop() {}
const connectWebsocket = noop;
const disconnectWebsocket = noop;
const setup = noop;
const cleanup = noop;
const condition = true;

const getRootStyle = () => ({
  backgroundColor: "pink",
});

class Counter extends React.Component {
  originalTitle = document.title;

  setDocumentTitle() {
    document.title = `Value = ${this.state.value}`;
  }

  restoreDocumentTitle() {
    document.title = this.originalTitle;
  }

  componentDidMount() {
    console.log("Counter#didMount");
    this.setDocumentTitle();
    connectWebsocket(this.props.channel);
    setup();
  }

  componentWillUnmount() {
    console.log("Counter#willUnmount");
    this.restoreDocumentTitle();
    disconnectWebsocket(this.props.channel);
    cleanup();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter#didUpdate", prevState, "=>", this.state);
    if (prevState.value !== this.state.value) {
      this.setDocumentTitle();
    }
    if (prevProps.channel !== this.props.channel) {
      disconnectWebsocket(prevProps.channel);
      connectWebsocket(this.props.channel);
    }
    if (condition) {
      cleanup();
      setup();
    }
  }

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
