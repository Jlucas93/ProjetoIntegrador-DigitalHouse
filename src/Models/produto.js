module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tamanho: DataTypes.STRING,
    cor: DataTypes.STRING,
    imagem: DataTypes.STRING,
    estoque: DataTypes.INTEGER,
    preco: DataTypes.INTEGER,
    categoria_id: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'produto'
  })
  return Produto
};

