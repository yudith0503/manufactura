const express = require('express')
const ProductionCenterController = require('../controllers/ProductionCenterController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', ProductionCenterController.findAll);
router.get('/:id', ProductionCenterController.findOne);
router.post('/', ProductionCenterController.create);
router.patch('/:id', ProductionCenterController.update);
router.delete('/:id', ProductionCenterController.destroy);

module.exports = router