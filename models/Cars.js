const
  mongoose = require("mongoose"),
  carsSchema = new mongoose.Schema({
    make: {type: String},
    model: {type: String},
    year: {type: Number}
  })

module.exports = mongoose.model('Cars', carsSchema
