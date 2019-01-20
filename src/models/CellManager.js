import Cell from "./Cell";

class CellManager {

  constructor(width, height) {
    let cells = [];
    for (let i = 0; i < width; i++) {
      let curCol = [];
      for (let j = 0; j < height; j++) {

        // Is this new one alive?
        let rand = Math.random();
        const odds = 0.6;
        curCol[j] = new Cell(this, i, j);
        const alive = (rand <= odds);
        curCol[j].setState(alive);
      }
      cells[i] = curCol;
    }

    this.cells = cells;
    this.width = width;
    this.height = height;
  }

  updateCells() {
    this.prepareCells();
    this.transitionCells();
  }

  prepareCells() {
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[i].length; j++) {
        this.cells[i][j].updateNextState();
      }
    }
  }

  transitionCells() {
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[i].length; j++) {
        this.cells[i][j].applyNextState();
      }
    }
  }

  getCells() {
    return this.cells;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  /*
   *  Array indicies of X's neighbors
   *  +---+---+---+
   *  | 0 | 1 | 2 |
   *  |-------|---|
   *  | 3 | X | 4 |
   *  |-------|---|
   *  | 5 | 6 | 7 |
   *  +-----------+
   */

  getNeighborStates(x, y) {
    // Note that the edge of the grid will come back as "not alive"
    // TODO: Return an array of the neighboring states

    const left = x - 1;
    const leftInBound = (left >= 0);

    const right = x + 1;
    const rightInBound = (right < this.cells.length);

    const up = y - 1;
    const upInBound = (up >= 0);

    const down = y + 1;
    const downInBound = (down < this.cells[x].length);

    return [
      // row above
      leftInBound && upInBound ? this.cells[left][up].alive : false,
      upInBound ? this.cells[x][up].alive : false,
      rightInBound && upInBound ? this.cells[right][up].alive : false,

      // main row
      leftInBound ? this.cells[left][y].alive : false,
      rightInBound ? this.cells[right][y].alive : false,

      // row below
      leftInBound && downInBound ? this.cells[left][down].alive : false,
      downInBound ? this.cells[x][down].alive : false,
      rightInBound && downInBound ? this.cells[right][down].alive : false,
    ];
  }
}

export default CellManager;