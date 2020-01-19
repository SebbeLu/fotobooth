var methods = {}
methods.takephoto = function () {
  var Gpio = require('onoff').Gpio
  var Mode1Open = new Gpio(23, 'in')
  var Mode1Closed = new Gpio(23, 'out')

  Mode1Open.writeSync(0)
  Mode1Closed.writeSync(1)
}
module.exports = methods
