const Ship = require('./Ship');
const Port = require('./Port');

describe('Ship', () => {
it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
})
});
describe('Ship', () => {
    it('has a starting port', () => {
const port = new Port('Dover');
const ship = new Ship(port);
expect(ship.currentPort).toBe(port);
    })
})
describe('Ship', () => {
    it('can set sail', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
ship.setSail();
expect(ship.currentPort).toBeFalsy();
    })
})
describe('Ship', () => {
    it('can dock at different port', () => {
        const dover = new Port('Dover');
        const ship = new Ship(dover);
        const calais = new Port('Calais');
        ship.dock(calais)
expect(ship.currentPort).toBe(calais);
    })
})