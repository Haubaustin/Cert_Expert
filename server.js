const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Cert } = require('./models')
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/certificates', async (req, res) => {
  const certificate = await Cert.find()
  res.json(certificate)
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
