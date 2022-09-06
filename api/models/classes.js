'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classes.hasMany(models.registrations, { foreignKey: "class_id" })
      Classes.belongsTo(models.users, { foreignKey: "teacher_id" })
      Classes.belongsTo(models.levels, { foreignKey: "level_id" })
    }
  }
  Classes.init({
    initial_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'classes',
  });
  return Classes;
};