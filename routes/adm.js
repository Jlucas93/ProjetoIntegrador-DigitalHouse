const express = require('express');
const router = express.Router();
const admController = require('../controllers/admController')

const multerStorage = require('../middlewares/multerStorage')
const validarCadastro = require('../middlewares/validarCadastro')
const verificarLoginAdm = require('../middlewares/verificarLoginAdm')

const uploadIMG = multerStorage('imagem', '/produtoExibicao')

router.get('/adm/login', admController.login)
router.get('/logout', admController.logout)
router.post('/adm/login', admController.postLogin)

router.use(verificarLoginAdm)
router.get('/adm', admController.index)
router.get('/adm/produto/cadastro', admController.cadastroProduto)
router.post('/adm/produto/cadastro', uploadIMG, admController.postPorduto)
router.get('/adm/usuario/registro', admController.createUser)
router.post('/adm/usuario/registro', validarCadastro, admController.postUser)

module.exports = router