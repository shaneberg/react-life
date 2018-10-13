import CellManager from "./CellManager";

class GameEngine {

  constructor() {
    const height = 10;
    const width = 15;
    this.cellManager = new CellManager(width, height);
  }

  // returns false to halt the loop
  update() {
    // for each cell, set its next state
    this.cellManager.updateCells();
  }

}

export default GameEngine;