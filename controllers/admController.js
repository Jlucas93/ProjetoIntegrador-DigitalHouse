const Produto = require('../Models/produto')
const admController = {
    index: (req, res) => {
        res.render('adm')
    },
    cadastroProduto: (req, res) => {
        res.render('adm/produtos/cadastro')
    },
    postPorduto: (req, res) => {
        const {
            nome,
            imagem,
            tamnhoP,
            tamanhoM,
            tamanhoG,
            preco,
            estoque,
            descricao,

        } = req.body

        const produto = {
            nome,
            imagem: 'img/produtoExibicao/' + req.file.filename,
            tamanhoP: (tamnhoP ? 'P' : false),
            tamanhoM: (tamanhoM ? 'M' : false),
            tamanhoG: (tamanhoG ? 'G' : false),
            preco,
            estoque: (estoque ? 'Em estoque' : 'Sem estoque'),
            descricao
        }
        Produto.save(produto)
        console.log(produto)

        return res.redirect('/adm')
    }
}

module.exports = admController