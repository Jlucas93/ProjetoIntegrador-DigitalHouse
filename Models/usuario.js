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

const Usuario = {
    findAll: () => {
        const dataBase = open()
        return dataBase.usuarios
    },
    findById: (id) => {
        const dataBase = open()
        const usuario = dataBase.usuarios.find(usuario => usuario.id === id)
        return usuario
    },
    findByEmail: (email) => {
        const dataBase = open()
        const user = dataBase.usuarios.find(user => user.email === email)
        return user
    },
    save: (usuario) => {
        const dataBase = open()
        usuario.id = geradorDeId()
        dataBase.usuarios.push(usuario)
        store(dataBase)
    }
}
module.exports = Usuario