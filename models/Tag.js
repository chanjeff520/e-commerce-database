const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name:{
      types: DataTypes.STRING
    },
    product_id: {
      types: DataTypes.INTEGER,
      refreences: {
        model: 'prodcut',
        key: 'id'
      }
    },
    tag_id: {
      types: DataTypes.INTEGER,
      refreences: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
