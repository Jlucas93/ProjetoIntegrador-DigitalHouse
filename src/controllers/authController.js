const { Usuario } = require('../Models');
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');

const authController = {
  login: (req, res) => {
    return res.render("home/login");
  },
  createUser: (req, res) => {
    return res.render("home/cadastro");
  },
  storeUser: async (req, res) => {
    console.log("req.body", req.body);
    let error = validationResult(req)
    if (error.isEmpty()) {
      const {
        nome,
        sobrenome,
        email,
        password,
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
      const isRegistered = await Usuario.findOne({ where: { email: email } })
      if (isRegistered) {
        return res.render("home/cadastro", { error: 'Email já registrado' });
      }
      const cryptSenha = bcrypt.hashSync(password, 10)
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
        isAdmin: (admin ? true : false)
      });

      return res.redirect('/')
    }
    return res.render('home/cadastro', { listaDeErros: error.errors, old: req.body })
  },
  postLogin: async (req, res) => {
    const {
      email,
      senha
    } = req.body;

    const user = await Usuario.findOne({ where: { email: email } });

    if (!user) {
      return res.render("home/login", { error: "Email está  incorreto ou não existe." });
    }
    if (!bcrypt.compareSync(senha, user.senha)) {
      return res.render("home/login", { error: "Senha está incorreta ou não existe." });
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