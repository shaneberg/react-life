// A look-less model of a Conway's Life cell

class CellManager {

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

  getNeighborStates(x, y) {
    // TODO: Return an array of the neighboring states
    return [];
  }
}

export default CellManager;