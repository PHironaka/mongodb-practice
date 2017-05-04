const carModel = require('../models/Cars.js')


module.exports = {
  home: function(req, res){
    res.send('Welcome to the home page')
  },
  list: function(req, res){
    carModel.find({}, (err, cars) => {
      res.json(cars)
    })
  },
  create: function(req, res){
    carModel.create(req.body, (err, newCar) => {
      res.json({success: true, car: newCar})
    })
  },
  show: function(req,res){
    carModel.findById(req.params.id, (err, singleCar) => {
      res.json(singleCar)
    })
  },
  edit: function(req, res){
    carModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCar) => {
      res.json({success:true, car: updatedCar})
    })
  },
  delete: function(req, res){
    carModel.findByIdAndRemove(req.params.id, (err, deletedCar) => {
      res.json({success: true, car: deletedCar})
    })
  }
}
