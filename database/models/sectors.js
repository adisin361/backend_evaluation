'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sectors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sectors.hasOne(models.companies, {
        as: 'company',
        foreignKey: 'sector_id',
      });
    }
  }
  sectors.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sectors',
  });
  return sectors;
};