const express = require('express')
const QualityAlertsController = require('../controllers/QualityAlertsController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', QualityAlertsController.findAll);
router.get('/:id', QualityAlertsController.findOne);
router.post('/', QualityAlertsController.create);
router.patch('/:id', QualityAlertsController.update);
router.delete('/:id', QualityAlertsController.destroy);

module.exports = router