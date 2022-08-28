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
  showEditUser: async (req, res) => {
    const { id } = req.params
    const user = await Usuario.findOne({ id: id })

    return res.render("adm/usuario/editar", { user })
  },
  postUser: async (req, res) => {
    let error = validationResult(req)
    if (error.isEmpty()) {
      const {
        nome,
        email,
        senha,
        sobrenome,
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
      const cryptSenha = await bcrypt.hashSync(senha, 10)
      try {
        await Usuario.create({
          nome,
          sobrenome,
          email,
          senha: cryptSenha,
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
      } catch (error) {
        console.log(error)
      }
    }
    return res.render('adm/usuario/registro', { listaDeErros: error.errors, old: req.body })
  },
  putUser: async (req, res) => {
    const { id } = req.params;
    const {
      nome,
      email,
      senha,
      sobrenome,
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
    const cryptSenha = await bcrypt.hashSync(senha, 10)
    try {
      await Usuario.update({
        nome,
        email,
        senha: cryptSenha,
        sobrenome,
        cpf,
        telefone,
        cep,
        cidade,
        estado,
        rua,
        bairro,
        numero,
        complemento,
        isAdmin: admin
      },
        {

          where: {
            id: id
          }
        })
      return res.redirect('/adm')
    } catch (e) {
      return console.log(e)
    }
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