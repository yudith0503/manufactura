const express = require('express')
const OperationController = require('../controllers/OperationController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', OperationController.findAll);
router.get('/:id', OperationController.findOne);
router.post('/', OperationController.create);
router.patch('/:id', OperationController.update);
router.delete('/:id', OperationController.destroy);

module.exports = router