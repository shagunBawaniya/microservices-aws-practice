const Product = require('../models/product');

async function create(req, res, next) {
  try {
    const { name, description, price, stock } = req.body;
    if (!name || price === undefined) {
      return res.status(400).json({ error: 'name and price are required' });
    }
    const product = await Product.create({ name, description, price, stock });
    return res.status(201).json(product);
  } catch (err) {
    next(err);
  }
}

async function list(req, res, next) {
  try {
    const products = await Product.findAll();
    return res.json(products);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    return res.json(product);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  create,
  list,
  getById,
};