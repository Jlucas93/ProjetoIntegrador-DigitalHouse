module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.INTEGER,
    estado: DataTypes.INTEGER,
    rua: DataTypes.INTEGER,
    bairro: DataTypes.INTEGER,
    numero: DataTypes.STRING,
    complemento: DataTypes.INTEGER

  }, {
    timestamps: false,
    tableName: 'usuarios'
  })
  return Usuario;
};


