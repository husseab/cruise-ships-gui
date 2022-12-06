const Port = require('./Port')

describe('Port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object)
  })

  it('has a Port name property', () => {
    const port = new Port('Liverpool')
    expect(port.name).toBe('Liverpool')
  })
  it('can add a ship', () => {
    const port = new Port('Liverpool')
    const ship = jest.fn()
    port.addShip(ship)
    expect(port.ships).toContain(ship)
  })
  it('can remove a ship', () => {
    const port = new Port('Liverpool')
    const titanic = jest.fn()
    const queenMAry = jest.fn()
    port.addShip(titanic)
    port.addShip(queenMAry)
    port.removeShip(queenMAry)
    expect(port.ships).toEqual([titanic])
  })
})
