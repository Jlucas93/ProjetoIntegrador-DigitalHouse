const express = require('express');
const router = express.Router();
const admController = require('../controllers/admController')
const multerStorage = require('../middlewares/multerStorage')

const uploadIMG = multerStorage('imagem', '/produtoExibicao')

router.get('/adm', admController.index)
router.get('/adm/produtos/cadastro', admController.cadastroProduto)
router.post('/adm/produtos/cadastro', uploadIMG, admController.postPorduto)

module.exports = router