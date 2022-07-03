const express = require('express');
const router = express.Router();
const ProdutosController = require("../controllers/ProdutosController");
const multerStorage = require('../middlewares/multerStorage')

const isAdm = require("../middlewares/isAdm");
const uploadIMG = multerStorage('imagem', '/produtoExibicao')


router.use(isAdm)
router.get("/cadastro", ProdutosController.createProduto);
router.post("/cadastro", uploadIMG, ProdutosController.store);
router.get("/:id", ProdutosController.showOneProduct);
router.get("/:id/editar", ProdutosController.showEditProduct);
router.put("/:id/editar", ProdutosController.edit);
router.delete("/:id", ProdutosController.delete);

module.exports = router;