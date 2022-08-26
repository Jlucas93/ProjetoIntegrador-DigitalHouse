const { Usuario, Produto } = require('../Models');
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
    let error = validationResult(req)
    if (error.isEmpty()) {
      const {
        nome,
        sobrenome,
        email,
        senha,
        cpf,
        telefone,
        cep,
        cidade,
        estado,
        rua,
        bairro,
        numero,
        complemento,
        admin
      } = req.body
      const cryptSenha = bcrypt.hashSync(senha, 10)
      await Usuario.create({
        nome,
        sobrenome,
        email,
        password: cryptSenha,
        cpf,
        telefone,
        cep,
        cidade,
        estado,
        rua,
        bairro,
        numero,
        complemento,
        isAdmin: admin ? true : false
      })
      return res.redirect('/adm')
    }
    return res.render('adm/usuario/registro', { listaDeErros: error.errors, old: req.body })
  },
  deleteUser: async (req, res) => {
    const { id } = req.params
    await Usuario.destroy({
      where: {
        id
      }
    });

    return res.redirect("/adm")
  },
  perfil: (req, res) => {
    res.render('home/perfil')
  },
  userList: async (req, res) => {
    const users = await Usuario.findAll()
    res.render('adm/usuario/users', { users })
  },
  produtoList: async (req, res) => {
    const produtos = await Produto.findAll()
    res.render('adm/produto/produtos', { produtos })
  }
}

module.exports = admController