const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database.js file for Sequelize instance

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'products',
  timestamps: true,
});

module.exports = Product;