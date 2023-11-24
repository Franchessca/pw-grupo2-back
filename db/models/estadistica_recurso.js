'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estadistica_recurso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.resource, {as:'recurso', foreignKey: 'resourceId'})
    }
  }
  estadistica_recurso.init({
    fecha_ultima_reserva: DataTypes.DATE,
    nro_reservas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'estadistica_recurso',
  });
  return estadistica_recurso;
};