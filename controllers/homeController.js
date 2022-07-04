const Produto = require("../Models/produto")

const homeController = {
    index: (req, res) => {
        const produtos = Produto.findAll()
        if (req.session.user) {
            res.render('home/index', { produtos, user: req.session.user })
        }
        res.render('home/index', { produtos })
    },
    cadastro: (req, res) => {
        res.render('home/cadastro')
    },
    perfil: (req, res) => {
        res.render('home/perfil')
    },
    historico: (req, res) => {
        res.render('home/historico')
    },
    carrinho: (req, res) => {
        res.render('home/carrinho')
    },
    produtos: (req, res) => {
        res.render('home/produtos')
    }

}
module.exports = homeController
