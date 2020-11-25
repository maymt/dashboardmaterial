const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'ec2-52-206-15-227.compute-1.amazonaws.com',
    user: 'mpdlwiymksjbbo',
    password: '026c558a53f723dd0c07a2e4c2265c33f0574b9f66b0d53256e18cdcdb729c33',
    database: 'daokhr6d468c47',
    port: '5432'
});

const getPedidos = async (req, res) => {
    const response = await pool.query('SELECT * FROM pedidos');
    res.status(200).json(response.rows);
};

const getPedidoByObra = async (req, res) => {
    const response = await pool.query('SELECT * FROM pedidos WHERE obra_oc = $1', [req.params.obra_oc]);
    res.json(response.rows)
};

module.exports = {
    getPedidos,
    getPedidoByObra
}
