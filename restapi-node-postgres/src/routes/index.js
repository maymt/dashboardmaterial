const { Router } = require('express');
const router = Router();

const { getPedidos, getPedidoByObra} = require('../controllers/index.controller')

router.get('/pedidos', getPedidos);
router.get('/pedidos/:obra_oc', getPedidoByObra);

module.exports = router;