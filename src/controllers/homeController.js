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
    const user = req.session.user
    res.render("home/Contato", { user})
  },
  perfil: (req, res) => {
    const user = req.session.user
    res.render("home/perfil", { user})
  },
  historico: (req, res) => {
    const user = req.session.user
    res.render("home/historico", { user})
  },
  carrinho: (req, res) => {
    const user = req.session.user
    res.render("home/carrinho", { user})
  },
  mensagemEnviada: (req, res) => {
    const user = req.session.user
    res.render("home/mensagemEnviada", { user})
  },

  produtosMasculino: (req, res) => {
    const user = req.session.user
    res.render("home/produtosMasculino", { user})
  },

  produtosFeminino: (req, res) => {
    const user = req.session.user
    res.render("home/produtosFeminino", { user})
  },

  produtosAcessorios: (req, res) => {
    const user = req.session.user
    res.render("home/produtosAcessorios", { user})
  },

  produtosCalcados: (req, res) => {
    const user = req.session.user
    res.render("home/produtosCalcados", { user})
  },


}
module.exports = homeController
