const db = require('../db/index.js');
import hashPassword from '../utils/hash';

const userController = {};

// product portfolio controllers
userController.createUser = async (req, res, next) => {

  const {email, secret_password} = req.body;
  const sqlStr = "INSERT INTO users(username, password) VALUES($1, $2);"
  const resultPassword = await hashPassword(secret_password);
  const values = [email, resultPassword]
  console.log(resultPassword)
  try {
    const result = await db.query(sqlStr, values);
    console.log('successfully inserted user into database', result);
    res.locals.isAuthenticated = true;
    return next();
  } catch(error) {
    return next(error);
  }
  // form => posts to req.body
    // <input name="username" value=""/>
    // <input name="password" value={e.target.value}/>
}

userController.getOneUser = async (req, res, next) => {
  const sqlStr = 'SELECT * FROM users WHERE username= $1';
  // discuss with Christian whether he wants this coming of the query string, or request body
  const value = [req.body.email];
  try {
    // TODO: handle non-error to db, but no user record matches
    const result = await db.query(sqlStr, value);
    console.log('successfully retrieved one user from database');
    const output = result.rows[0];
    return res.send(output);
  } catch(err) {
    return next(err);
  }
}

userController.getAllUsers = async (req, res, next) => {
  const sqlStr = 'SELECT * FROM users';
  try {
    const result = await db.query(sqlStr);
    console.log('successfully retrieved all users from database');
    const output = result.rows;
    return res.send(output);
  } catch(err) {
    return next(err);
  }
}

// TODO: make sure the update function only updates one user - right now, will update all who have username and password
// user will not know what their unique id is
userController.updateUser = async (req, res, next) => {
  const sqlStr = 'UPDATE users SET username=$1, password=$2 WHERE username=$3 AND password=$4';
  const values = [req.body.new_email, req.body.new_password, req.body.email, req.body.secret_password];
  try {
    const output = await db.query(sqlStr, values);
    console.log(output)
    if (output.rowCount > 0) {
      console.log('successfully updated one user');
      res.locals.username = req.body.new_email;
    } else {
      return res.json('could not find a user with that username and password');
    }
    
    return next();
  } catch(err) {
    console.log('error connecting to database')
    return next(err);
  }
}

userController.deleteUser = async (req, res, next) => {
  const sqlStr = 'DELETE FROM users WHERE username=$1 AND password=$2';
  const values = [req.body.email, req.body.secret_password];
  try {
    const result = await db.query(sqlStr, values);
    if (result.rowCount > 0) {
      console.log('successfully delete user');
    } else {
      return res.json('could not find a user with that username and password');
    }
    return next();
  } catch(err) {
    console.log('error connecting to database');
    return next(err);
  }
}


module.exports = userController;