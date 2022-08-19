const express = require('express')
const router = express.Router()
const AuthController = require("../controllers/AuthController")

const validarCadastro = require('../middlewares/validarCadastro')


router.get("/login", AuthController.login)
router.post("/login", AuthController.postLogin)
router.get("/cadastro", AuthController.createUser)
router.post("/cadastro", validarCadastro, AuthController.storeUser)
router.get("/logout", AuthController.logout)


// router.get("/cadastro/add")
module.exports = router;