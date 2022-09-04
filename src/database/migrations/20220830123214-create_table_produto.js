'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('produto', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      preco: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: false,
      },
      tamanho: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      cor: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      estoque: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      categoria_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      descricao: Sequelize.DataTypes.TEXT,

      produto_categoria_foreign: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'categoria', key: 'id' }
      },
    })
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produto');
  }
};
