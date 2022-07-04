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
        return res.render('adm/usuario/registro', { listaDeErros: error.errors, old: req.body })
    }
}

module.exports = admController