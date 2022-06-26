const admController = {
    index: (req, res) => {
        res.render('adm')
    },
    cadastroProduto: (req, res) => {
        res.render('adm/produtos/cadastro')
    }
}

module.exports = admController