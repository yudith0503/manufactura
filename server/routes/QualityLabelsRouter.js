const express = require('express')
const QualityLabelsController = require('../controllers/QualityLabelsController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', QualityLabelsController.findAll);
router.get('/:id', QualityLabelsController.findOne);
router.post('/', QualityLabelsController.create);
router.patch('/:id', QualityLabelsController.update);
router.delete('/:id', QualityLabelsController.destroy);

module.exports = router