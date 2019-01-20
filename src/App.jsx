import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import GameEngine from './models/GameEngine';
import SVGReactLifeBoard from './components/SVGReactLifeBoard';

class App extends Component {

  constructor() {
    super();
    this.gameEngine = new GameEngine(50, 50);

    this.gameEngine.registerListener(this.onChange.bind(this));
    this.gameEngine.setUpdateInterval(2000); // 1 second
    this.gameEngine.start();

    this.cellManager = this.gameEngine.getCellManager();
    this.state = { cells: [] };
  }

  // game loop update
  onChange() {
    this.setState({ cells: this.cellManager.getCells() });
  }

  renderTableForCells(cells) {
    const width = this.gameEngine.getWidth();
    const height = this.gameEngine.getHeight();
    const cellRadius = 4;
    return (<SVGReactLifeBoard
      width={width}
      height={height}
      cellRadius={cellRadius}
      cells={this.state.cells}
    />);
  }

  render() {
    const cellRendering = this.renderTableForCells(this.props.cells);
    return (<div className="App" >
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" >
          Welcome to React
         </h1>
      </header>
      <p className="App-intro" >
      </p>
      {cellRendering}
    </div>
    );
  }
}

export default App;