const Product = require('../models/product');

class ProductService {
  async createProduct(productData) {
    try {
      const product = await Product.create(productData);
      return product;
    } catch (error) {
      throw new Error('Error creating product: ' + error.message);
    }
  }

  async getAllProducts() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw new Error('Error retrieving products: ' + error.message);
    }
  }

  async getProductById(productId) {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error('Error retrieving product: ' + error.message);
    }
  }

  async updateProduct(productId, productData) {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.update(productData);
      return product;
    } catch (error) {
      throw new Error('Error updating product: ' + error.message);
    }
  }

  async deleteProduct(productId) {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.destroy();
      return { message: 'Product deleted successfully' };
    } catch (error) {
      throw new Error('Error deleting product: ' + error.message);
    }
  }
}

module.exports = new ProductService();