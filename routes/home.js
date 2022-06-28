const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

router.get('/', homeController.index)
router.get('/cadastro', homeController.cadastro)
router.get('/login', homeController.login)
router.get('/perfil', homeController.perfil)
router.get('/historico', homeController.historico)
router.get('/produtos', homeController.produtos)

module.exports = router