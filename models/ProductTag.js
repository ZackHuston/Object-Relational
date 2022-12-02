const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
      type: DataTypes.integer,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id:{
      type: DataTypes.integer,
      refrences:{
        model: 'product',
        key: 'id'
      }
    },
    tag_id:{
      type: DataTypes.integer,
      refrences:{
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
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
