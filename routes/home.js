const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

router.get('/', homeController.index)
router.get('/produtos/:id', homeController.produtos)
router.get('/historico', homeController.historico)
router.get('/contato', homeController.contato)

module.exports = router