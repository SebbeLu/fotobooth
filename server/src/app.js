const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const path = 'C:/Users/darko/OneDrive/Bilder'

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

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
  res.send({
    message: 'Foto gemacht!'
  })
})
app.get('/images', (req, res) => {
  var files = fs.readdirSync(path)
  res.send(files)
})

app.use('/images', express.static(path))
app.listen(process.env.PORT || 8081)
