const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

router.get('/', homeController.index)
router.get('/cadastro', homeController.cadastro)
router.post('/cadastro', homeController.postCadastro)
router.get('/login', homeController.login)
router.get('/perfil', homeController.perfil)
router.get('/historico', homeController.historico)
router.get('/cadastro', homeController.cadastro)
router.get('/produtos', homeController.produtos)
router.get('/carrinho', homeController.carrinho)

module.exports = router