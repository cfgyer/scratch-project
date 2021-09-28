const db = require('../db/index.js');

const productController = {};

// TODO: refactor queries to use paramterized lookups or "prepared statements", instead of sql injection vulnerable concatenated strings

// product portfolio controllers
productController.createProduct = async (req, res, next) => {
  
  // in elephant sql, you need a "prepared" statement query string to avoid sql injections; php explanation here: https://stackoverflow.com/questions/4712037/what-is-parameterized-query
  const speciesId = req.query.id;
  // notes from Christian - use an ORM (third party library to avoid creating raw concatenated sql string - look at Sequelize)
  const sqlStr = ``;
  const result = await db.query(sqlStr);
  res.locals.speciesInfo = result.rows[0];
  next();
}

productController.getProduct = async (req, res, next) => {}

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
