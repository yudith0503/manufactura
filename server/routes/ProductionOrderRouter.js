const express = require('express')
const ProductionOrderController = require('../controllers/ProductionOrderController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', ProductionOrderController.findAll);
router.get('/:id', ProductionOrderController.findOne);
router.post('/', ProductionOrderController.create);
router.patch('/:id', ProductionOrderController.update);
router.delete('/:id', ProductionOrderController.destroy);

module.exports = router