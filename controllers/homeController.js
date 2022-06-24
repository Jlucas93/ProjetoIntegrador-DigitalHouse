const Produto = require("../Models/produto")
const fs = require("fs")

const homeController = {
    index: (req, res, next) => {
        const produtos = Produto.findAll()
        res.render('index', { produtos })
    },
    cadastro: (req, res, next) => {
        res.render('cadastro')
    },
    login: (req, res, next) => {
        res.render('login')
    },
    perfil: (req, res, next) => {
        res.render('perfil')
    },
    historico: (req, res, next) => {
        res.render('historico')
    },
    carrinho: (req, res, next) => {
        res.render('carrinho')
    },
    produtos: (req, res, next) => {
        res.render('produtos')
    }

}
module.exports = homeController
