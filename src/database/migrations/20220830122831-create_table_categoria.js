'use strict';

module.exports = {
     async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categoria', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome_categoria: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
      },
     })
  },

    async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categoria');
  }
};
