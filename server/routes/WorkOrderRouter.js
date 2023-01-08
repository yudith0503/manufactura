const express = require('express')
const WorkOrderController = require('../controllers/WorkOrderController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', WorkOrderController.findAll);
router.get('/:id', WorkOrderController.findOne);
router.post('/', WorkOrderController.create);
router.patch('/:id', WorkOrderController.update);
router.delete('/:id', WorkOrderController.destroy);

module.exports = router