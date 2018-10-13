
class CellManager {

  constructor(width, height) {
    let cells = [];
    for (let i = 0; i < width; i++) {
      let curCol = [];
      for (let j = 0; j < height; j++) {

        // Is this new one alive?
        let rand = Math.random();
        const odds = 0.3;
        curCol[j] = (rand <= odds);
      }
      cells[i] = curCol;
    }

    this.cells = cells;
  }

  updateCells() {
    this.prepareCells();
    this.transitionCells();
  }

  prepareCells() {
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].updateNextState();
    }
  }

  transitioncells() {
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].applyNextState();
    }
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
      leftInBound && upInBound ? this.cells[left][up] : false,
      upInBound ? this.cells[x][up] : false,
      rightInBound && upInBound ? this.cells[right][up] : false,

      // main row
      leftInBound ? this.cells[left][y] : false,
      rightInBound ? this.cells[right][y] : false,

      // row below
      leftInBound && downInBound ? this.cells[left][down] : false,
      downInBound ? this.cells[x][down] : false,
      rightInBound && downInBound ? this.cells[right][down] : false,
    ];
  }
}

export default CellManager;