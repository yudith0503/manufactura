const express = require('express')
const RoutingsController = require('../controllers/RoutingsController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', RoutingsController.findAll);
router.get('/:id', RoutingsController.findOne);
router.post('/', RoutingsController.create);
router.patch('/:id', RoutingsController.update);
router.delete('/:id', RoutingsController.destroy);

module.exports = router