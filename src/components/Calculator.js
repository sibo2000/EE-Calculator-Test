import React, { Component } from "react";
import calculate from "../utils/calculate";
import keyValues from "../utils/keyvalues";

import "./Calculator.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: [],
      operation: undefined,
      value2: [],
      total: undefined
    };
  }

  onKeyPress(val) {
    if (val === "=") {
      return this.equals();
    }

    if (val === "AC") {
      return this.allClear();
    }

    if (typeof val !== "number") {
      this.setState({
        operation: val
      });
      return;
    }

    // If operation is not yet set, append to number value
    if (this.state.operation === undefined) {
      const copy = this.state.value1;
      copy.push(val);
      return this.setState({
        value1: copy
      });
    } else {
      const copy = this.state.value2;
      copy.push(val);
      return this.setState({
        value2: copy
      });
    }
  }

  allClear() {
    this.setState({
      value1: [],
      operation: undefined,
      value2: [],
      total: undefined
    });
  }

  equals() {
    const total = calculate(
      this.state.value1,
      this.state.operation,
      this.state.value2
    );
    this.setState({
      total: total
    });
  }

  keys() {
    return keyValues.map(i => {
      return (
        <button
          key={i.name}
          className={i.name}
          onClick={() => {
            this.onKeyPress(i.val);
          }}
        >
          {i.val}
        </button>
      );
    });
  }

  display() {
    if (this.state.total !== undefined) {
      return this.state.total;
    }

    if (this.state.value2.length > 0) {
      return this.state.value2;
    }

    if (this.state.value1.length > 0) {
      return this.state.value1;
    }
    return 0;
  }

  render() {
    return (
      <div className="Calculator">
        <div className="display">{this.display()}</div>
        {this.keys()}
      </div>
    );
  }
}

export default App;
