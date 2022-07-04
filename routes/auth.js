const express = require('express')
const router = express.Router()
const AuthController = require("../controllers/AuthController")

const validationResult = require('../middlewares/validationResult')


router.get("/login", AuthController.login);
router.post("/login", AuthController.postLogin);
router.get("/cadastro", AuthController.createUser);
router.post("/cadastro", validationResult, AuthController.storeUser);
router.get("/logout", AuthController.logout);

module.exports = router;