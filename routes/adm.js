const express = require('express');
const router = express.Router();
const admController = require('../controllers/admController')

router.get('/adm', admController.index)
router.get('/adm/produtos/cadastro', admController.cadastroProduto)

module.exports = router