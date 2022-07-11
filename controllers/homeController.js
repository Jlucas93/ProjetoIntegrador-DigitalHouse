const Produto = require("../Models/produto")

const homeController = {
  index: (req, res) => {
    const produtos = Produto.findAll()
    if (req.session.user) {
      return res.render("home/index", { produtos, user: req.session.user })
    }
    return res.render("home/index", { produtos })
  },
  cadastro: (req, res) => {
    res.render("home/cadastro")
  },
  produtos: (req, res) => {
    const { id } = req.params
    const produto = Produto.findById(id)
    if (!produto) {
      return res.render("home/not-found", { error: "Produto não encontrado" });
    }
    return res.render("home/detalhes", { produto })
  },
  contato: (req, res) => {
    res.render("home/Contato")
  },

  perfil: (req, res) => {
    res.render("home/perfil")
  },
  historico: (req, res) => {
    res.render("home/historico")
  },
  carrinho: (req, res) => {
    res.render("home/carrinho")
  }
}
module.exports = homeController
