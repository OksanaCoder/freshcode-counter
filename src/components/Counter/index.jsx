import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
      autoClickTime: 0
    };
    this.idInterval = null;
    this.autoClickTimeout = null;
    this.idIntervalCount = null;
  }
  componentDidMount = () => {
    this.autoClickTimeout = setTimeout(() => {
      clearInterval(this.idInterval);
    }, 30000);
    this.idInterval = setInterval(this.handleAutoClick, 1000);
    this.idIntervalCount = setInterval(this.handleCount, 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.idInterval);
    clearTimeout(this.autoClickTimeout);
    clearInterval(this.idIntervalCount);
  };
  handleCount = () => {
    this.setState((state, props) => {
      if (state.isAdd) {
        return { count: state.count + props.step };
      }
      return { count: state.count - props.step };
    });
  };
  handleChangeMode = () => {
    this.setState({
      isAdd: !this.state.isAdd
    });
  };
  handleAutoClick = () => {
    this.setState((state) => ({
      autoClickTime: state.autoClickTime + 1
    }));
  };
  render() {
    const { count, isAdd, autoClickTime } = this.state;
    const { step } = this.props;
    return (
      <div>
        <h2>{count}</h2>
        <h2>Step : {step}</h2>
        <button onClick={this.handleCount}>
          {isAdd ? "додати" : "відняти"}
        </button>
        <button onClick={this.handleChangeMode}>переключити команду</button>
        <button onClick={this.handleAutoClick}>autoClick</button>
        <h3>Autoclick works: {autoClickTime} sec</h3>
      </div>
    );
  }
}
Counter.propTypes = {
  step: PropTypes.number.isRequired
};
Counter.defaultProps = {
  step: 1
};
export default Counter;
