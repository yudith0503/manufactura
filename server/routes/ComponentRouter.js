const express = require('express')
const ComponentController = require('../controllers/ComponentController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', ComponentController.findAll);
router.get('/:id', ComponentController.findOne);
router.post('/', ComponentController.create);
router.patch('/:id', ComponentController.update);
router.delete('/:id', ComponentController.destroy);

module.exports = router