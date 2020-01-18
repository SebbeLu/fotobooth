var methods = {}
methods.takephoto = function () {
  var Gpio = require('onoff').Gpio
  var mode1_open = new Gpio(23, 'in')
  var mode1_closed = new Gpio(23, 'out')

  mode1_open.writeSync(0)
  mode1_closed.writeSync(1)
}
module.exports = methods
