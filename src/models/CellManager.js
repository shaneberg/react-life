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
    cells.length = width;
    for (let i = 0; i < cells.length; i++) {
      cells[i] = [];
      cells[i].length = height;
    }
    this.cells = cells;
  }



  getNeighborStates(x, y) {

    // TODO: Return an array of the neighboring states
    return [];
  }
}

export default CellManager;