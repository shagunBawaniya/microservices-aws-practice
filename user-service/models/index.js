const { Sequelize } = require('sequelize');
const UserModel = require('./user');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    dialect: 'postgres',
    dialectOptions: process.env.DB_SSL === 'true' ? { ssl: { rejectUnauthorized: false } } : {},
    logging: false,
  }
);

const User = UserModel(sequelize, Sequelize.DataTypes);

const db = { sequelize, Sequelize, User };

module.exports = db;