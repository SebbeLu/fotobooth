const chokidar = require('chokidar')
const sharp = require('sharp')
const config = require('./config.json')
const path = require('path')

var methods = {}

methods.watchUpload = function () {
  chokidar.watch(config.upload).on('add', (imagePath, event) => {
    console.log(imagePath, path.basename(imagePath), event)
    sharp(imagePath).resize({ width: 1080 }).toFile(config.imageFolder + '/' + path.basename(imagePath))
  })
}
module.exports = methods
