const Produto = require("../Models/produto")
const fs = require("fs")
const { validationResult } = require("express-validator")
const bcrypt = require("bcrypt")
const Usuario = require("../Models/usuario")

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
    postCadastro: (req, res) => {
        let error = validationResult(req)
        if (error.isEmpty()) {
            const {
                nome,
                sobrenome,
                email,
                senha,
                endereco,
                data,
            } = req.body
            const cryptSenha = bcrypt.hashSync(senha, 10)
            const user = {
                nome,
                sobrenome,
                email,
                senha: cryptSenha,
                admin: false,
                endereco,
                data,
            }
            Usuario.save(user)
            return res.redirect('/')
        }
        return res.render('home/cadastro', { listaDeErros: error.errors, old: req.body })
    },
    login: (req, res) => {
        res.render('home/login')
    },
    auth: (req, res) => {
        const {
            email,
            password
        } = req.body
console.log(req.body)

        const user = Usuario.findByEmail(email)
        
        if (!user || !bcrypt.compareSync(password, user.senha)) {
            res.render('home/login', { error: 'Email ou senha está incorreto ou não existe' })
            return
        }
        req.session.user = user
        return res.redirect('/')

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
