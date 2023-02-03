'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  companies.init({
    name: DataTypes.STRING,
    ceo: DataTypes.STRING,
    description: DataTypes.STRING,
    score: DataTypes.NUMBER,
    sector_id: DataTypes.NUMBER,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'companies',
  });
  return companies;
};