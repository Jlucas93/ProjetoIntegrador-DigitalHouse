const express = require('express');
const router = express.Router();
const admController = require('../controllers/admController')

const validarCadastro = require('../middlewares/validarCadastro')
const isLogged = require('../middlewares/isLogged')
const isAdm = require('../middlewares/isAdm');
const authController = require('../controllers/AuthController');

router.use(isLogged)
router.use(isAdm)
router.get('/adm', admController.index)
router.get('/adm/usuario/listausuarios', admController.userList)
router.get('/adm/usuario/registro', admController.createUser)

router.get('/adm/usuario/editar/:id', admController.showEditUser)
router.put('/adm/usuario/editar/:id', admController.putUser)

router.post('/adm/usuario/cadastro', validarCadastro, admController.postUser)
router.delete('/adm/usuario/remover/:id', admController.deleteUser)
router.get('/produto/listaprodutos', admController.produtoList)


module.exports = router 