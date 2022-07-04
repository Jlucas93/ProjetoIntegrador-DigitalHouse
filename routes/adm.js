const express = require('express');
const router = express.Router();
const admController = require('../controllers/admController')

const validarCadastro = require('../middlewares/validarCadastro')
const isAdm = require('../middlewares/isAdm')


router.get('/adm/login', admController.login)
router.post('/adm/login', admController.postLogin)
router.get('/logout', admController.logout)
// revisar logica
router.use(isAdm)
router.get('/adm', admController.index)
router.get('/adm/usuario/registro', admController.createUser)
router.post('/adm/usuario/registro', validarCadastro, admController.postUser)

module.exports = router