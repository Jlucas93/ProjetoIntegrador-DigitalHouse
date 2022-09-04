'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      sobrenome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      telefone: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      cep: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      cidade: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      estado: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      rua: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      bairro: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.DataTypes.INTEGER(20),
        allowNull: false
      },
      complemento: Sequelize.DataTypes.TEXT,
      isAdmin: Sequelize.DataTypes.BOOLEAN,

      
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');

  }
};