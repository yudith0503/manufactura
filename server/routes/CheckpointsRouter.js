const express = require('express')
const CheckpointsController = require('../controllers/CheckpointsController')
const router = express.Router();

//Rutas para cada método de la modelo 

router.get('/', CheckpointsController.findAll);
router.get('/:id', CheckpointsController.findOne);
router.post('/', CheckpointsController.create);
router.patch('/:id', CheckpointsController.update);
router.delete('/:id', CheckpointsController.destroy);

module.exports = router