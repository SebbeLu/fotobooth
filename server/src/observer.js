const chokidar = require('chokidar')
const sharp = require('sharp')
const config = require('./config.json')
const path = require('path')

var methods = {}

methods.watchUpload = function () {
  chokidar.watch(config.upload, {awaitWriteFinish: true}).on('add', (imagePath) => {
    console.log(imagePath)
    try{
     sharp(imagePath).resize({ width: 1080 }).toFile(config.imageFolder + '/' + path.basename(imagePath)).then(console.log)
    }
    catch(err){
      console.log(err)
    }
  })
}
module.exports = methods
