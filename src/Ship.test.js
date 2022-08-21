const Ship = require('./Ship');

describe('Ship', () => {
it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
})
});
describe('Ship', () => {
    it('has a starting port', () => {
const ship = new Ship('Dover');
expect(ship.startingPort).toBe('Dover');
    })
})