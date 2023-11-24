'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estadistica_reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {as:'usuario', foreignKey: 'userId'})
      this.belongsTo(models.resource, {as:'recurso', foreignKey: 'resourceId'})
    }
  }
  estadistica_reserva.init({
    fecha_reserva: DataTypes.DATE,
    n_reservas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'estadistica_reserva',
  });
  return estadistica_reserva;
};