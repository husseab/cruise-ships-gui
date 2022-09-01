function Port(name) {
this.portName = name;
this.ships = [];
}



Port.prototype.addShip = function(ship) {
 return this.ships.push(ship) 
};

Port.prototype.removeShip = function(ship) {  
let myIndex = this.ships.indexOf(ship);
 return this.ships.splice(myIndex, 1)
    
    }

module.exports = Port;