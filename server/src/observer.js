const chokidar = require('chokidar')
const sharp = require('sharp')
const config = require('./config.json')

var methods = {}

methods.watchUpload = function () {
  chokidar.watch(config.uploaded).on('add', (event, path) => {
    console.log(event, path)
    sharp(path).resize({ width: 1080 }).toFile(config.imageFolder)
  })
}
module.exports = methods
