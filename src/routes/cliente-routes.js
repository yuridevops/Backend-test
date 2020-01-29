const express = require('express');

const ClienteController = require('../controllers/ClienteController');


const router = express.Router();

router.post('/',ClienteController.create);
router.get('/getall', ClienteController.showAll);
router.get('/getbyname',ClienteController.getName)
router.put('/',ClienteController.edit)
router.delete('/',ClienteController.del)


module.exports = router;