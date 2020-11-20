const { response } = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'mvp_db',
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