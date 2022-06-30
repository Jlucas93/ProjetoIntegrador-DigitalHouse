const Produto = require("../Models/produto")
const fs = require("fs")

const homeController = {
    index: (req, res, next) => {
        const produtos = Produto.findAll()
        res.render('home/index', { produtos })
    },
    cadastro: (req, res, next) => {
        res.render('home/cadastro')
    },
    login: (req, res, next) => {
        res.render('home/login')
    },
    perfil: (req, res, next) => {
        res.render('home/perfil')
    },
    historico: (req, res, next) => {
        res.render('home/historico')
    },
    carrinho: (req, res, next) => {
        res.render('home/carrinho')
    },
    produtos: (req, res, next) => {
        res.render('home/produtos')
    }

}
module.exports = homeController
