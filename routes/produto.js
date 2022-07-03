const express = require('express');
const router = express.Router();
const ProdutosController = require("../controllers/ProdutosController");
const multerStorage = require('../middlewares/multerStorage')

const isAdm = require("../middlewares/isAdm");
const uploadIMG = multerStorage('imagem', '/produtoExibicao')


router.use(isAdm);
router.get("/produto/cadastro", ProdutosController.createProduto);
router.post("/produto/cadastro", uploadIMG, ProdutosController.store);
router.get("/produto/:id", ProdutosController.showOneProduct);
router.get("/produto/:id/editar", ProdutosController.showEditProduct);
router.put("/produto/:id/editar", ProdutosController.edit);
router.delete("/produto/:id", ProdutosController.delete);

module.exports = router;