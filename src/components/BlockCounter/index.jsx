import React, { Component } from "react";
import Counter from "../Counter";

class BlockCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }
  handleChangeStep = (e) => {
    const val = parseInt(e.target.value);

    this.setState({
      step: val >= 1 && val <= 1000000 ? val : parseInt("")
    });
  };
  render() {
    const { step } = this.state;
    return (
      <div>
        <Counter step={step} />
        Enter range from 1 до 1000000
        <input type="number" onChange={this.handleChangeStep} value={step} />
      </div>
    );
  }
}

export default BlockCounter;
