// A look-less model of a Conway's Life cell

class Cell {

  constructor(manager, x, y) {
    // Can constructors throw/fail?
    this.manager = manager;
    this.pos = {x: x, y: y};
    this.nextAlive = false;
    this.setState(false);
  }

  setState(alive) {
    this.alive = alive;
  }

  // Consider moving to a utils class
  static countValues(array, target) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
      const curVal = array[i];
      if (curVal === target) {
        count++;
      }
    }

    return count;
  }

  // What is this particular cell's fate in the subsequent next turn?
  getNextState() {
    const neighborStates = this.manager.getNeighborStates(this.pos.x, this.pos.y);
    const neighborCount = Cell.countValues(neighborStates, true);
    return Cell.determineNextState(this.alive, neighborCount);
  }

  updateNextState() {
    this.nextState = this.getNextState();
  }

  applyNextState() {
    this.alive = this.nextState();
  }

  /*
   * determineNextState enforces the rules of Conway's Life for each cell.
   *
   * Rules:
   * 1. Underpopulation - Too few neighbors kills living cells
   *    Any live cell with fewer than two live neighbors dies, as if by under population.
   *
   * 2. Sustaining - Two or three neighbors sustains living cells
   *    Any live cell with two or three live neighbors lives on to the next generation.
   *
   * 3. Overpopulation - More than three neighbors kills living cells
   *    Any live cell with more than three live neighbors dies, as if by overpopulation.
   *
   * 4. Reproduction - Exactly three neighbors wakes a dead cell
   *    Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
   */
  static determineNextState(currentState, neighborCount) {

    // Should these live in a util constants class?
    const minNeighborsToSustain = 2;
    const maxNeighborsToSustain = 3;

    const minNeighborsToWake = 3;
    const maxNeighborsToWake = 3;

    // Assume underpopulation (1), overpopulation (3), non-sustaining (!2), and non-reproduction (!4) cases.
    let nextState = false;

    if (currentState) {

      // We only live if we have the right number of neighbors.
      if (neighborCount >= minNeighborsToSustain && neighborCount <= maxNeighborsToSustain) {
        // We're in Rule 2: Sustaining.
        nextState = true;
      }

    } else {
      // Dead. We only wake up if we have the right number of neighbors
      if (neighborCount >= minNeighborsToWake && neighborCount <= maxNeighborsToWake) {
        // We're in Rule 4: Reproduction
        nextState = true;
      }
    }

    return nextState;
  }
}

export default Cell;
