const express = require('express');

const PedidoController = require('../controllers/PedidoController');


const router = express.Router();

router.post('/',PedidoController.create);
router.get('/getall', PedidoController.showAll);
router.put('/',PedidoController.edit)
router.delete('/',PedidoController.del)


module.exports = router;