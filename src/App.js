import React, { Component } from 'react';
import calculate from './utils/calculate';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value1: [],
      operation: undefined,
      value2: [],
      total: undefined
    };
  }

  onKeyPress = val => {

    if (val === '=') {
      const total = calculate(
        this.state.value1,
        this.state.operation,
        this.state.value2
      )
      this.setState({
        total: total
      })
    }

    if (typeof val !== "number") {
      this.setState({
        operation: val
      })
      return
    }

    // If operation is not yet set, append to number key
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
  render() {
    return (
      <div>
        <p>{this.state.total}</p>
        <button onClick={() => { this.onKeyPress(1) }}>1</button>
        <button onClick={() => { this.onKeyPress(2) }}>2</button>
        <button onClick={() => { this.onKeyPress('+') }}>+</button>
        <button onClick={() => { this.onKeyPress('=') }}>=</button>
      </div>
  )}
}

export default App;
