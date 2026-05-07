const { Product } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Sample Product 1',
        description: 'Description for Sample Product 1',
        price: 19.99,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sample Product 2',
        description: 'Description for Sample Product 2',
        price: 29.99,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sample Product 3',
        description: 'Description for Sample Product 3',
        price: 39.99,
        stock: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  },
};