'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vendas', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      usuario_id: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
      data: Sequelize.DataTypes.DATE(6),
      valor: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      vendas_usuario_id_foreign: {
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'usuarios', key: 'id' }
      }

    })
  },


   async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('vendas');
  }
};
