const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// used as a reference table between our product and tag with many-to-many relationship
ProductTag.init(
  {
    //id of the Product Tag
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //id of the product
    product_id: {
      type: DataTypes.INTEGER,
      refreences: {
        model: 'product',
        key: 'id',
      }
    },
    //id of the tag
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
