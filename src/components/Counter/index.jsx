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
  }
  componentDidMount = () => {
    this.idInterval = setInterval(this.handleAutoClick(), 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.idInterval);
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
    if (this.state.autoClickTime >= 30) {
      // Якщо пройшло 30 секунд, очищуємо інтервал autoClick
      clearInterval(this.idInterval);
    } else if (this.idInterval === null) {
      this.idInterval = setInterval(this.handleCount, 1000);
    }
  };
  render() {
    const { count, isAdd } = this.state;
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
      </div>
    );
  }
}
Counter.propTypes = {
  step: PropTypes.number
};
export default Counter;
