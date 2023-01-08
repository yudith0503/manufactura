const express = require('express')
const MaterialListController = require('../controllers/MaterialListController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', MaterialListController.findAll);
router.get('/:id', MaterialListController.findOne);
router.post('/', MaterialListController.create);
router.patch('/:id', MaterialListController.update);
router.delete('/:id', MaterialListController.destroy);

module.exports = router