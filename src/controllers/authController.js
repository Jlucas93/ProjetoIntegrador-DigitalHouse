const Usuario = require('../usuario');
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');

const authController = {
  login: (req, res) => {
    return res.render("home/login");
  },
  createUser: (req, res) => {
    return res.render("home/cadastro");
  },
  storeUser: (req, res) => {
    let error = validationResult(req)
    if (error.isEmpty()) {
      const {
        nome,
        sobrenome,
        email,
        senha,
        admin
      } = req.body
      const isRegistered = Usuario.findByEmail(email);
      if (isRegistered) {
        return res.render("home/cadastro", { error: 'Email já registrado' });
      }
      const cryptSenha = bcrypt.hashSync(senha, 10)
      const user = {
        nome,
        sobrenome,
        email,
        senha: cryptSenha,
        admin: (admin ? true : false)
      }
      Usuario.save(user)
      return res.redirect('/')
    }
    return res.render('home/cadastro', { listaDeErros: error.errors, old: req.body })
  },
  postLogin: (req, res) => {
    const {
      email,
      senha
    } = req.body;

    const user = Usuario.findByEmail(email);

    if (!user || !bcrypt.compareSync(senha, user.senha)) {
      return res.render("home/login", { error: "Email ou senha estão incorretos ou não existe." });
    }
    req.session.user = user;
    return res.redirect("/");
  },
  logout: (req, res) => {
    req.session.destroy((error) => {
      console.log(error)
      return res.redirect('/')
    })
  }

}
module.exports = authController