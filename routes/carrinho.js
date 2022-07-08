const express = require('express')
const router = express.Router()
const carrinhoController = require('../controllers/carrinhoController')

const isLogged = require('../middlewares/isLogged')

router.use(isLogged)
router.get("/carrinho", carrinhoController.showCart)
router.post("/carrinho/adicionar", carrinhoController.addCart)
router.delete("/carrinho/remover/:id", carrinhoController.deleteCart)


module.exports = router;