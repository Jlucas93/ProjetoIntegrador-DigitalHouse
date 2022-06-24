const fs = require('fs')
const { v4: geradorDeId } = require('uuid')

function open() {
    let content = fs.readFileSync("./db.json", "utf8")
    const db = JSON.parse(content); // de texto json para js
    return db
}

function store(db) {
    content = JSON.stringify(db); // de js para texto json
    fs.writeFileSync("./db.json", content, "utf8")
}

const Produto = {
    findAll: () => {
        const db = open()
        return db.produtos
    },
    findById: (id) => {
        const db = open()
        const produto = db.produtos.find(produto => produto.id === id)
        return produto
    },
    save: (produto) => {
        const db = open()
        produto.id = geradorDeId()
        db.produto.push(produto)
        store(db)
    }
}

module.exports = Produto