const Produto = require('../models/produto')

const produtoContoller = {
    store: (req, res) => {
        const {
            nome,
            tamanhoP,
            tamanhoM,
            tamanhoG,
            preco,
            estoque,
            descricao,

        } = req.body

        const produto = {
            nome,
            imagem: 'img/produtoExibicao/' + req.file.filename,
            tamanhoP: !!tamanhoP,
            tamanhoM: !!tamanhoM,
            tamanhoG: !!tamanhoG,
            preco,
            estoque: (estoque ? 'Em estoque' : 'Sem estoque'),
            descricao
        }
        Produto.save(produto)
        console.log(produto)

        return res.redirect('/adm')
    },
    createProduto: (req, res) => {
        res.render('adm/produto/cadastro')
    },
    showOneProduct: (req, res) => {
        const { id } = req.params;
        const produto = Produto.findById(id);
        return res.render("adm/produtos/detalhes", { produto });
    },
    showEditProduct: (req, res) => {
        const { id } = req.params;
        const produto = Produto.findById(id);
        return res.render("adm/produtos/editar", { produto });
    },
    edit: (req, res) => {
        const { id } = req.params;
        const { imagem, nome, preco, ativo, descricao } = req.body;

        const produto = {
            id,
            nome,
            imagem,
            preco,
            ativo: (ativo ? true : false),
            descricao
        }
        Produto.update(id, produto);
        return res.redirect("/adm/produtos");
    },

    delete: (req, res) => {
        const { id } = req.params;
        Produto.delete(id);
        return res.redirect("/adm/produtos");
    }
}

module.exports = produtoContoller