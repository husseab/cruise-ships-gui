const Port = require('./Port');
const Ship = require('./Ship');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

        it('has a Port name property', () => {
    const port= new Port('Liverpool');
    expect(port.portName).toBe('Liverpool');
        })
        it('can add a ship', () => {
            const port= new Port('Liverpool');
            const ship = {};
            port.addShip(ship);
            expect(port.ships).toContain(ship);
                })
         it('can remove a ship', () => {
             const port= new Port('Liverpool');
             const titanic = {};
             const queenMAry = {};
              port.addShip(titanic);
              port.addShip(queenMAry);
              port.removeShips(queenMAry)
              expect(port.ships).toEqual([titanic]);
                        })
    })