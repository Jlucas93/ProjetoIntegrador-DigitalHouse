'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produtos_venda', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      venda_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        allowNull: false,
      },
      produto_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        allowNull: false,
      },
      produtos_venda_venda_id_foreign: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: { model: 'vendas', key: 'id' }
      },
      produtos_venda_produto_id_foreign: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: { model: 'produto', key: 'id' }
      },

    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('produtos_venda');
     
  }
};
