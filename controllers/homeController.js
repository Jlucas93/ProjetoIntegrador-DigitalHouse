const Produto = require("../Models/produto")
const fs = require("fs")

const homeController = {
    index: (req, res) => {
        const produtos = Produto.findAll()
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
