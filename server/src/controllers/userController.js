const db = require('../db/index.js');

const userController = {};

// product portfolio controllers
userController.createUser = async (req, res, next) => {

  const {email, secret_password} = req.body;
  console.log(email, secret_password)
  // const currentUserName = req.body.username;
  // const currentUserPassword = req.body.password;
  // console.log(currentUserName, currentUserPassword);
  // write a sql query string that creates a record in the users table corresponding to username and password
    // TODO: find out if elephant automatically gives you unique user_id
  // async await query result from db
  // wrap above in try catch
  // return next()
  // const col1 = 'username';
  // const col2 = 'password'

  const sqlStr = "INSERT INTO users(username, password) VALUES (?, ?);";

  const sqlStr2 = `INSERT INTO users(username) Values ('nonsense');`
  const sqlStr3 = "INSERT INTO users(username, password) VALUES($1, $2);"
  const values = [email, secret_password]
  try {
  await db.query(sqlStr3, values);
    console.log('successfully hit database');
    return next();
  } catch(error) {
    return next(error);
  }
                  
  // in elephant sql, you need a "prepared" statement query string to avoid sql injections; php explanation here: https://stackoverflow.com/questions/4712037/what-is-parameterized-query
  // how to keep track of how many user ids have been used up to know what is next
  
  // form => posts to req.body
    // <input name="username" value=""/>
    // <input name="password" value={e.target.value}/>

  // pull the username and password off the request body 
    // - because the username and password came from an input form, they will be key value pairs on req.body - the keys will match the name attributes on the form element; and the key value will match what the client typed into form
    // urlstring/:param?qs1=query1


  // const firstname = req.query.firstname;
  // const lastname = req.query.lastname;
  // const email = req.query.email;

}

userController.getAllUsers = async (req, res, next) => {

  const sqlStr = 'SELECT * FROM users';
  try {
    const result = await db.query(sqlStr);
    const output = result.rows;
    return res.send(output);
  } catch(err) {
    return next(err);
  }

}

userController.getOneUser = async (req, res, next) => {

}

userController.updateUser = async (req, res, next) => {}

userController.deleteUser = async (req, res, next) => {}



module.exports = userController;