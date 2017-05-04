const
  mongoose = require("mongoose"),
  carSchema = new mongoose.Schema({
    make: {type: String},
    model: {type: String},
    year: {type: Number}
  })

module.exports = mongoose.model('Cars', carSchema)
