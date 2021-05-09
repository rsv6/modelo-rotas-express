require('dotenv/config')
const express = require('express')
const app = express()

app.use(
  express.urlencoded({
    extended: true
  }),
  express.json()
)

module.exports = app