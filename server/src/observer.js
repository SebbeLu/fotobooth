const chokidar = require('chokidar')
const sharp = require('sharp')
const source = '/home/pi/upload'
const destination = '/home/pi/images'

var methods = {}

methods.watchUpload = function () {
  chokidar.watch(source).on('add', (event, path) => {
    console.log(event, path)
    sharp(path).resize({ width: 1080 }).toFile(destination)
  })
}
module.exports = methods
