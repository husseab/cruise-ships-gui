const Port = require('./Port');

function Ship(currentPort) {
this.currentPort = currentPort
}

Ship.prototype.setSail = function() {
this.currentPort = null;
return this.currentPort
}
Ship.prototype.dock = function (port) {
this.currentPort = port
}

module.exports = Ship;