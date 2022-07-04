const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

router.get('/', homeController.index)
router.get('/perfil', homeController.perfil)
router.get('/historico', homeController.historico)
router.get('/produtos', homeController.produtos)
router.get('/carrinho', homeController.carrinho)

module.exports = router