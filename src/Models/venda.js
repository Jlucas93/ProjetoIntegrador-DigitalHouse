module.exports = (sequelize, DataTypes) => {
    const Vendas = sequelize.define('Vendas', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      usuario_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false
      },
      data: {
        type: DataTypes.DATE,
        allowNull: true,
        // defaultValue: Date.now()
      },
      valor: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      }
    }, {
      timestamps: false,
      tableName: 'vendas'
    })
   
    return Vendas
  };
  