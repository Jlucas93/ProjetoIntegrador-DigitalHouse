const { Produto } = require("../Models/")

const homeController = {
  index: async (req, res) => {
    try {
      const produtos = await Produto.findAll()

      if (req.session.user) {
        return res.render("home/index", { produtos, user: req.session.user })
      }
      return res.render("home/index", { produtos })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Bad Request' })
    }
  },
  cadastro: (req, res) => {
    res.render("home/cadastro")
  },
  produtos: async (req, res) => {
    const { id } = req.params
    try {
      const produto = await Produto.findByPk(id)

      if (!produto) {
        return res.render("home/not-found", { error: "Produto não encontrado" });
      }
      return res.render("home/detalhes", { produto, user: req.session.user })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Bad Request' })
    }
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
  },
  mensagemEnviada: (req, res) => {
    res.render("home/mensagemEnviada")
  },

}
module.exports = homeController
