const express = require('express')
const QualityControlController = require('../controllers/QualityControlController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', QualityControlController.findAll);
router.get('/:id', QualityControlController.findOne);
router.post('/', QualityControlController.create);
router.patch('/:id', QualityControlController.update);
router.delete('/:id', QualityControlController.destroy);

module.exports = router