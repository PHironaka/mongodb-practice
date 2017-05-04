const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  carController = require('./controllers/carsController.js')

mongoose.connect('mongodb://localhost/carShop', (err) => {
  console.log(err || 'Connected to mongo!')
})

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', carController.home)

app.get('/cars', carController.list)

app.post('/cars', carController.create)

app.get('/cars/:id', carController.show)

app.patch('cars/:id', carController.edit)

app.delete('cars/:id', carController.delete)

app.listen(1234, (err) => {
  console.log(err || "Server running on 1234")
})
