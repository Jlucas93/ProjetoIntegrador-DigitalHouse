const { Usuario } = require('../Models');
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');

const authController = {
  login: (req, res) => {
    return res.render("home/login");
  },
  perfil: (req, res) => {
    res.render('home/perfil', { user: req.session.user })
  },
  meusDados: (req, res) => {
    res.render('home/meusDados', { user: req.session.user })
  },
  atualizarDados: async (req, res) => {
    const { id, nome, sobrenome, cpf, telefone, cep, cidade, estado, rua, bairro, numero, complemento
    } = req.body;
    await Usuario.update({
      nome,
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

    }, {
      where: { id }
    }
    )

    const user = await Usuario.findOne({ where: { id: id } })
    req.session.user = user;
    res.render('home/meusDados', { user: user })
  },
  createUser: (req, res) => {
    return res.render("home/cadastro");
  },
  storeUser: async (req, res) => {
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
      const isRegistered = await Usuario.findOne({ where: { email: email } })
      if (isRegistered) {
        return res.render("home/cadastro", { error: 'Email já registrado' });
      }
      const cryptSenha = bcrypt.hashSync(senha, 10)
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
  pagamentos: (req, res) => {
    const { carrinho } = req.session;
    let total = 0;
    for (let produto of carrinho) {
      total += parseFloat(produto.preco)
      console.log("req.session.total");
    }
    res.render('home/pagamentos', { carrinho, total })
  },
  pagamentoRealizado: (req, res) => {
    req.session.carrinho = null;
    res.render('home/pagamentoRealizado')
  },
  logout: (req, res) => {
    req.session.destroy((error) => {
      console.log(error)
      return res.redirect('/')
    })
  }

}
module.exports = authController