import React, { Component } from "react";
import "./App.css";
import Calculator from './components/Calculator';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <header>
          <img className='logo' src='./logo.svg' alt='Equal Experts Logo' />
        </header>
        <main>
          <h1>Equal Experts Calculator</h1>
          <Calculator />
        </main>
        <footer>
          Equal Experts Test | Simon Bowler | Code available on <a href="https://github.com/sibo2000/EE-Calculator-Test">Github</a>
        </footer>
      </div>
    );
  }
}

export default App;
