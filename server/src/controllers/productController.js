const db = require('../db/index.js');

const productController = {};

// TODO: refactor queries to use paramterized lookups or "prepared statements", instead of sql injection vulnerable concatenated strings

// product portfolio controllers
productController.createProduct = async (req, res, next) => {
  const {drop_time, product_name, brand_name, price, description, image_url} = req.body;
  const values = [drop_time, product_name, brand_name, price, description, image_url];
  const sqlStr = `INSERT INTO products (drop_time, product_name, brand_name, product_price, description, image_url) VALUES ($1, $2, $3, $4, $5, $6)`;
  try {
    await db.query(sqlStr, values);
    console.log('inserted into db')
    return next();
  } catch(e) {
    return next(e);
  }
}

productController.getProduct = async (req, res, next) => {
  const sqlStr = 'SELECT * FROM products WHERE product_id=$1';
}



productController.getAllProducts = async (req, res, next) => {
  const sqlStr = 'SELECT * FROM products'; 
  try {
    const result = await db.query(sqlStr);
    console.log('retrieved object of all products', result.rows)
    return res.json({products: result.rows});
  } catch(e) {
    return next(e);
  }
}

productController.updateProduct = async (req, res, next) => {}

productController.deleteProduct = async (req, res, next) => {}



// inventory table controllers
productController.incrementInventory = async (req, res, next) => {}

productController.decrementInventory = async (req, res, next) => {}

productController.addProductToInventoryTable = async (req, res, next) => {}

productController.deleteProductFromInventoryTable = async (req, res, next) => {}


module.exports = productController;


/**
 * model controller function from star wars
  starWarsController.getSpecies = async (req, res, next) => {
    const speciesId = req.query.id;
    const sqlStr = `SELECT s.*, p._id, p.name AS homeworld FROM species s LEFT JOIN planets p ON s.homeworld_id=p._id WHERE s._id = ${speciesId}`;
    const result = await db.query(sqlStr);
    res.locals.speciesInfo = result.rows[0];
    next();
  };
 */
