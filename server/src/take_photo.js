const config = require('./config.json')
var methods = {}
methods.takephoto = function () {
  var Gpio = require('onoff').Gpio
  var Mode1Open = new Gpio(config.gpio.pin, 'in')
  var Mode1Closed = new Gpio(config.gpio.pin, 'out')

  Mode1Open.writeSync(0)
  Mode1Closed.writeSync(1)
}
module.exports = methods
