const { Usuario }  = require('../Models');
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');

const admController = {
  index: (req, res) => {
    res.render('adm')
  },
  createUser: (req, res) => {
    res.render('adm/usuario/registro')
  },
  postUser: async (req, res) => {
    const {nome, sobrenome, email, senha, confirmacaoSenha, admin } = req.body;
    
    const hash = bcrypt.hashSync(password, 10);    
     const usuario = await Usuario.create({
      nome,
      sobrenome,
      email,
      senha: hash,
      confirmacaoSenha,
      adm
    })
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
  },
  deleteUser: (req, res) => {
    const { id } = req.params
    Usuario.delete(id)

    return res.redirect("/adm")
  },
  perfil: (req, res) => {
    res.render('home/perfil')
  },
  userList: (req, res) => {
    const users = Usuario.findAll()
    res.render('adm/usuario/users', { users })
  }
}

module.exports = admController