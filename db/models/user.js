'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.resource, {through : 'reservas', as : 'someAlias', foreignKey:'userId'})
      this.hasOne(models.estadistica_reserva, {as:'estaReserva', foreignKey: 'userId'})

    }
  }
  user.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    tipo_documento: DataTypes.STRING,
    n_documento: DataTypes.INTEGER,
    correo: DataTypes.STRING,
    contrasenia: DataTypes.STRING,
    imagen: DataTypes.STRING,
    tipo_usuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};