const express = require('express')
const app = express()

app.get('/about', (request, response) => {
  response.send('About Page')
})

app.get('/', (request, response) => {
  response.send('Home Page')
})

module.exports = app
