module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    nome_categoria: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
    {
      timestamps: false,
      tableName: 'categoria'
    })

  return Categoria
};
