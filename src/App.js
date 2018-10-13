import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameEngine from './models/GameEngine';

class App extends Component {

  constructor() {
    super();
    this.gameEngine = new GameEngine(10, 15);
    this.cellManager = this.gameEngine.getCellManager();
  }

  render() {
    // const cells = this.cellManager.getCells();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {cells}
        </p>
      </div>
    );
  }
}

export default App;
