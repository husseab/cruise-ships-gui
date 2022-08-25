const Port = require('./Port');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })
    });
    describe('Port', () => {
        it('has a Port name property', () => {
    const port= new Port('Liverpool');
    expect(port.portName).toBe('Liverpool');
        })
    })