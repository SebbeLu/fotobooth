const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const config = require('./config.json')
const camera = require('./take_photo.js')
const observer = require('./observer')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

observer.watchUpload()
io.on('connection', (client) => {
  console.log('Client connected...')
  client.on('join', (data) => {
    console.log(data)
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registerd! Have fun!`
  })
})
app.post('/focus', (req, res) => {
  res.send({
    message: 'Fokus ausgelöst!'
  })
})
app.post('/shot', (req, res) => {
  camera.takephoto()
  res.send({
    message: 'Foto gemacht!'
  })
})
app.get('/images', (req, res) => {
  var files = fs.readdirSync(config.imageFolder)
  files.reverse()
  res.send(files)
})

app.use('/images', express.static(config.imageFolder))
server.listen(process.env.PORT || config.ports.http)
