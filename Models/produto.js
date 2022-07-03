const fs = require('fs')
const { v4: geradorDeId } = require('uuid')

function open() {
    let content = fs.readFileSync("./db.json", "utf8")
    const dataBase = JSON.parse(content); // de texto json para js
    return dataBase
}

function store(dataBase) {
    let content = JSON.stringify(dataBase); // de js para texto json
    fs.writeFileSync("./db.json", content, "utf8")
}

const Produto = {
    findAll: () => {
        const dataBase = open()
        return dataBase.produtos
    },
    findById: (id) => {
        const dataBase = open()
        const produto = dataBase.produtos.find(produto => produto.id === id)
        return produto
    },
    findByEmail: (email) => {
        const dataBase = open()
        const user = dataBase.usuarios.find(user => user.email === email)
        return user
    },
    update: (id, produtoAtualizado) => {
        const dataBase = open()
        const index = dataBase.produtos.findIndex(produto => produto.id === id)
        dataBase.produtos[index] = produtoAtualizado
        store(dataBase)
    },
    delete: (id) => {
        const dataBase = open()
        const index = dataBase.produtos.findIndex(produto => produto.id === id)
        dataBase.produtos.splice(index, 1)
        store(dataBase)
    },
    save: (produto) => {
        const dataBase = open()
        produto.id = geradorDeId()
        dataBase.produtos.push(produto)
        store(dataBase)
    }
}

module.exports = Produto