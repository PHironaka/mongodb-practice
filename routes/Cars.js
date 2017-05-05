const
  express = require('express'),
  carRouter = express.Router(),
  carsController = require('../controllers/carsController.js')

  carRouter.route('/')
    .get(carsController.list)
    .post(carsController.create)
  carRouter.route('/:id')
    .get(carsController.show)
    .patch(carsController.edit)
    .delete(carsController.delete)

module.exports = carRouter
