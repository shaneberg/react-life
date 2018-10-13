import CellManager from "./CellManager";

class GameEngine {

  constructor(width, height) {
    this.cellManager = new CellManager(width, height);
  }

  // returns false to halt the loop
  update() {
    // for each cell, set its next state
    this.cellManager.updateCells();
  }

  getCellManager() {
    return this.cellManager;
  }

}

export default GameEngine;