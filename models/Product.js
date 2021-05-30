// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const Category = require('./Category');
// import our database connection from config.js
const sequelize = require('../config/connection');
const { ProductTag } = require('.');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    product_name: DataTypes.STRING,
    price: DataTypes.FLOAT(11, 2),
    stock: DataTypes.INTEGER,
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
