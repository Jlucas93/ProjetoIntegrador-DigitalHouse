const { Produto, Categoria } = require('../Models')

const produtoContoller = {
  store: async (req, res) => {
    const {
      nome,
      cor,
      preco,
      estoque,
      tamanho,
      categoria,
      descricao
    } = req.body
    console.log('ID DA CATEGORIA', categoria)
    try {
      await Produto.create({
        nome,
        cor,
        imagem: 'img/produtoExibicao/' + req.file.filename,
        preco,
        estoque,
        tamanho,
        categoria_id: categoria,
        descricao
      })
      return res.redirect('/adm')

    } catch (error) {
      return console.error(error)
    }

  },
  createProduto: async (req, res) => {
    const categorias = await Categoria.findAll()
    res.render('adm/produto/cadastro', { categorias })
  },
  showOneProduct: async (req, res) => {
    const { id } = req.params;
    const produto = await await Produto.findOne({ where: { id: id } });
    return res.render("adm/produtos/detalhes", { produto });
  },
  /*   showEditProduct: async (req, res) => {
      const { id } = req.params;
      const produto = await Produto.findOne({ where: { id: id } });
      return res.render("adm/produtos/editar", { produto });
    }, */
  edit: async (req, res) => {
    const { id } = req.params;
    const {
      imagem,
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
    return res.redirect("/adm");
  }
}

module.exports = produtoContoller