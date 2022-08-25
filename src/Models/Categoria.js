module.exports = (sequelize, DataTypes) => {
    const categoria = sequelize.define('categoria', {
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
   
    return categoria
  };
  