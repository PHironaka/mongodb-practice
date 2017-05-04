const
  express = require('express'),
  app = express()

 app.get('/', (req, res) => {

 })

 app.get('/cars', (req, res) => {

 })

 app.post('/cars/:id', (req, res) => {

 })

 app.get('/cars/:id', (req,res) => {

 })

 app.patch('cars/:id', (req,res) => {

 })

 app.delete('cars/:id', (req,res) => {

 })

  app.listen(1234, (err) => {
    console.log(err || "Server running on 1234")
  })
