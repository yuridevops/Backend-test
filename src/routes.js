const express = require('express')

const router = express.Router()


const clienteRoutes = require('./routes/cliente-routes')
const produtoRoutes = require('./routes/produto-routes')
const pedidoRoutes = require('./routes/pedidos-routes')


router.use('/clientes',clienteRoutes)
router.use('/produtos',produtoRoutes)
router.use('/pedidos',pedidoRoutes)

module.exports = router;
