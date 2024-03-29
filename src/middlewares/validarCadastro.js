const { body } = require('express-validator');

const validarCadastro = [
  body('nome')
    .notEmpty().withMessage('O nome deve estar preenchido')
    .isLength({ min: 5 }).withMessage("O nome deve ter mais de 5 caracteres")
    .bail(),
  body('email')
    .isEmail()
    .withMessage('Não é um email válido'),
  body('senha')
    .isLength({ min: 5 })
    .withMessage('A senha deve ter mais de 5 caracteres'),
  body('confirmacaoSenha')
    .custom((value, { req }) => {
      if (value !== req.body.senha) {
        throw new Error("Senhas não conferem")
      }
      return true
    }),
  body('cpf')
    .isLength(11)
    .withMessage("o número do CPF não é válido")
  
]
module.exports = validarCadastro