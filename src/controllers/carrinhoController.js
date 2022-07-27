const carrinhoController = {
    showCart: (req, res) => {
        const { carrinho } = req.session

        let total = 0

        if (!carrinho) {
            return res.render('home/carrinho', { carrinho: [], total })
        }
        for (let produto of carrinho) {
            total += parseFloat(produto.preco)
        }
        res.render('home/carrinho', { carrinho, total })
    },
    addCart: (req, res) => {
        const {
            id,
            nome,
            preco,
            imagem
        } = req.body

        const produto = { id: id, nome, preco, imagem }
        if (req.session.carrinho) {
            req.session.carrinho.push(produto)
        } else {
            req.session.carrinho = [produto]
        }
        console.log(req.session.carrinho)
        res.redirect('/carrinho')
    },
    deleteCart: (req, res) => {
        const { id } = req.body
        let { carrinho } = req.session;

        const index = carrinho.indexOf(produto => produto.id === id)

        const carrinhoAtualizado = carrinho.splice(index, 1)
        carrinho = carrinhoAtualizado
        if (carrinho.length <= 0) {
            carrinho = [];
            return res.redirect('/carrinho')
        }

        return res.redirect('/carrinho');
    }
}

module.exports = carrinhoController