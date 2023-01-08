const express = require('express')
const ProductController = require('../controllers/ProductController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', ProductController.findAll);
router.get('/:id', ProductController.findOne);
router.post('/', ProductController.create);
router.patch('/:id', ProductController.update);
router.delete('/:id', ProductController.destroy);

module.exports = router