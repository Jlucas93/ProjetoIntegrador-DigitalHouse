const express = require('express');
const router = express.Router();
const admController = require('../controllers/admController')

const validarCadastro = require('../middlewares/validarCadastro')
const isLogged = require('../middlewares/isLogged')
const isAdm = require('../middlewares/isAdm')

router.use(isLogged)
router.use(isAdm)
router.get('/adm', admController.index)
router.get('/adm/usuario/registro', admController.createUser)
router.post('/adm/usuario/registro', validarCadastro, admController.postUser)

module.exports = router 