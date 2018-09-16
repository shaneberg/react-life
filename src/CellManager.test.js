import CellManager from './models/CellManager';

it('calls getNeighborStates', () => {
  const manager = new CellManager(10, 10);
  const results = manager.getNeighborStates(0, 0);
  // TOOD: Check if results is an array of length 8
});