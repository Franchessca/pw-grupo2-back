'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.user, {through : 'reservas', as : 'someAlias', foreignKey:'resourceId'})
      this.hasOne(models.estadistica_recurso, {as:'estaRecurso', foreignKey: 'resourceId'})
      this.hasOne(models.estadistica_reserva, {as:'estaReserva', foreignKey: 'resourceId'})
    }
  }
  resource.init({
    titulo: DataTypes.STRING,
    autores: DataTypes.STRING,
    serie: DataTypes.STRING,
    isbn: DataTypes.BIGINT,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'resource',
  });
  return resource;
};