const { body } = require('express-validator');


const validacaoRegistroUsuario = [
    body('nome')
        .notEmpty().withMessage('Deve estar preenchido')
        .isLength({ min: 5 }).withMessage("Menos de 5 caractéres")
        .bail(),
    body('email')
        .isEmail()
        .withMessage('Não é um email válido'),
    body('senha')
        .isLength({ min: 5 })
        .withMessage('Deve ter pelo menos 5 caracteres'),
    body('confirmacaoSenha')
        .custom((value, { req }) => {
            if (value !== req.body.senha) {
                throw new Error("Senhas não conferem")
            }
            return true
        })
]

module.exports = validacaoRegistroUsuario