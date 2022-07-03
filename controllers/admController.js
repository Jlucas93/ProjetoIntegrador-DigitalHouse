const Usuario = require('../models/usuario')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');

const admController = {
    index: (req, res) => {
        res.render('adm')
    },
    createUser: (req, res) => {
        res.render('adm/usuario/registro')
    },
    postUser: (req, res) => {
        let error = validationResult(req)
        if (error.isEmpty()) {
            const {
                nome,
                sobrenome,
                email,
                senha,
                admin
            } = req.body
            const cryptSenha = bcrypt.hashSync(senha, 10)
            const user = {
                nome,
                sobrenome,
                email,
                senha: cryptSenha,
                admin: (admin ? true : false)
            }
            Usuario.save(user)
            return res.redirect('/adm')
        }
        return res.render('adm', { listaDeErros: error.errors, old: req.body })
    },
    login: (req, res) => {
        res.render('adm/login')
    },
    postLogin: (req, res) => {
        const {
            email,
            senha
        } = req.body

        const user = Usuario.findByEmail(email)

        if (!user || !bcrypt.compareSync(senha, user.senha)) {
            res.render('adm/login', { error: 'Email ou senha está incorreto ou não existe' })
            return
        }
        req.session.user = user
        console.log(req.session)
        return res.redirect('/adm')

    },
    logout: (req, res) => {
        req.session.destroy((error) => {
            console.log(error)
            return res.redirect('/adm/login')
        })
    }
}

module.exports = admController