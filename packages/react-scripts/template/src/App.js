import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://www.bkjk.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            贝壳金服
          </a>
        </header>
      </div>
    );
  }
}

export default App;
