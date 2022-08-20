const { Produto } = require('../Models')

const produtoContoller = {
  store: async (req, res) => {
    const {
      nome,
      tamanhoP,
      tamanhoM,
      tamanhoG,
      preco,
      cor,
      estoque,
      descricao,

    } = req.body
    try {
      const produto = {
        nome,
        imagem: 'img/produtoExibicao/' + req.file.filename,
        tamanhoP: !!tamanhoP,
        tamanhoM: !!tamanhoM,
        tamanhoG: !!tamanhoG,
        preco,
        cor,
        estoque,
        descricao
      }
      await Produto.create({
        nome,
        imagem,
        preco,
        cor,
        estoque,
        tamanhoP,
        tamanhoM,
        tamanhoG,
        descricao
      })
      console.log(produto)

      return res.redirect('/adm')

    } catch (error) {
      return console.error(error)
    }

  },
  createProduto: (req, res) => {
    res.render('adm/produto/cadastro')
  },
  showOneProduct: async (req, res) => {
    const { id } = req.params;
    const produto = await Produto.findById(id);
    return res.render("adm/produtos/detalhes", { produto });
  },
  showEditProduct: async (req, res) => {
    const { id } = req.params;
    const produto = await Produto.findById(id);
    return res.render("adm/produtos/editar", { produto });
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const { imagem,
      nome,
      preco,
      ativo,
      descricao
    } = req.body;
    try {

      await Produto.update({
        nome: nome,
        imagem: imagem,
        preco: preco,
        ativo: ativo,
        descricao: descricao

      },
        {

          where: {
            id: id
          }
        });
      return res.redirect("/adm/produtos");
    } catch (error) {
      return console.log(error);
    }
  },

  delete: (req, res) => {
    const { id } = req.params;
    Produto.destroy({
      where: {
        id
      }
    });
    return res.redirect("/adm/produtos");
  }
}

module.exports = produtoContoller