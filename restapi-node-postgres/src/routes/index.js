const {Router}  = require('express');
const router = Router();

const {getUsers} = require('../controllers/index.controller.js');

router.get('/users',getUsers);

module.exports = router;
