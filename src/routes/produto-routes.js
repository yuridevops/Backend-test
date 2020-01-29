const express = require('express');

const ProdutoController = require('../controllers/ProdutoController');


const router = express.Router();

router.post('/',ProdutoController.create);
router.get('/getall', ProdutoController.showAll);
router.get('/getbydescricao',ProdutoController.getDescription)
router.put('/',ProdutoController.edit)
router.delete('/',ProdutoController.del)


module.exports = router;