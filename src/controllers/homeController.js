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
    res.render("home/Contato", { user })
  },
  perfil: (req, res) => {
    const user = req.session.user
    res.render("home/perfil", { user })
  },
  historico: (req, res) => {
    const user = req.session.user
    res.render("home/historico", { user })
  },
  carrinho: (req, res) => {
    const user = req.session.user
    res.render("home/carrinho", { user })
  },
  mensagemEnviada: (req, res) => {
    const user = req.session.user
    res.render("home/mensagemEnviada", { user })
  },

  produtosMasculino: async (req, res) => {
    const user = req.session.user
    try {
      const produtos = await Produto.findAll({
        where: { categoria_id: 1 }
      })
      console.log(produtos)
      return res.render("home/produtosMasculino", { user, produtos })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Bad Request' })
    }
  },

  produtosFeminino: async (req, res) => {
    const user = req.session.user
    try {
      const produtos = await Produto.findAll({
        where: { categoria_id: 2 }
      })
      console.log(produtos)
      return res.render("home/produtosFeminino", { user, produtos })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Bad Request' })
    }
  },

  produtosAcessorios: async (req, res) => {
    const user = req.session.user
    try {
      const produtos = await Produto.findAll({
        where: { categoria_id: 4 }
      })
      console.log(produtos)
      return res.render("home/produtosAcessorios", { user, produtos })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Bad Request' })
    }
  },

  produtosCalcados: async (req, res) => {
    const user = req.session.user
    try {
      const produtos = await Produto.findAll({
        where: { categoria_id: 3 }
      })
      console.log(produtos)
      return res.render("home/produtosCalcados", { user, produtos })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Bad Request' })
    }
  },

}
module.exports = homeController
