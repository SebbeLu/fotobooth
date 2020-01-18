var gpio = require('pi-gpio')
var gpioPin = 23

gpio.open(gpioPin, 'input', function (err) {
  gpio.write(gpioPin, 0, function () {
    gpio.close(gpioPin)
  })
})
