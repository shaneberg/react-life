import CellManager from './models/CellManager';

it('calls getNeighborStates', () => {
  const manager = new CellManager(10, 10);
  const results = manager.getNeighborStates(0, 0);
  expect(results.length).toBe(8);
});