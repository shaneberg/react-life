import CellManager from "./CellManager";

class GameEngine {

  constructor(width, height) {
    this.cellManager = new CellManager(width, height);
    this.listeners = [];
    this.updateTimer = null;
  }

  // returns false to halt the loop
  update() {
    // for each cell, set its next state
    this.cellManager.updateCells();
    this.updateListeners();

    this.updateTimer = setTimeout(this.update.bind(this), this.updateInterval);
  }

  updateListeners() {
    for (let i = 0; i < this.listeners.length; i++) {
      let curCallback = this.listeners[i];
      curCallback();
    }
  }

  start() {
    this.updateTimer = setTimeout(this.update.bind(this), this.updateInterval);
  }

  stop() {
    if (this.updateTimer) {
      this.updateTimer.stop();
    }
  }

  getWidth() {
    return this.cellManager.getWidth();
  }

  getHeight() {
    return this.cellManager.getHeight();
  }

  setUpdateInterval(milliseconds) {
    this.updateInterval = milliseconds;
  }

  registerListener(onUpdateCallback) {
    this.listeners.push(onUpdateCallback);
  }

  getCellManager() {
    return this.cellManager;
  }
}

export default GameEngine;