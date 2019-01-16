import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameEngine from './models/GameEngine';

class App extends Component {

  constructor() {
    super();
    this.gameEngine = new GameEngine(10, 20);
    this.cellManager = this.gameEngine.getCellManager();

    setTimeout(this.update.bind(this), 1000);
  }

  // game loop update
  update() {
    this.gameEngine.update()
    this.forceUpdate();
    setTimeout(this.update.bind(this), 1000);
  }

  renderTableForCells(cells) {
    let key = 0;
    const renderedCells = cells.map((cellRow) => {
      const renderedRow = cellRow.map((cell) => {
        return cell.alive ? '*' : '-';
      });
      key++;
      return <p key={key}>{renderedRow}</p>;
    });
    return (
      <tt>{renderedCells}</tt>
    );
  }

  render() {
    const cells = this.cellManager.getCells();
    const cellRendering = this.renderTableForCells(cells);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
          {cellRendering}
      </div>
    );
  }
}

export default App;
