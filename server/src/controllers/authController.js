const db = require('../db/index.js');


const authController = {};

authController.loginUser = async (req, res, next) => {
  const {username, password} = req.body;
  const sqlStr = 'SELECT * FROM users WHERE username= $1 AND password=$2';
  const values = [username, password];
  try {
    const result = await db.query(sqlStr, values);
    return res.status(200).json({user: result.rows[0]});
  } catch(e) {
    return res.status(400).json({err: `failed to reach database - error of ${e}`});
  }
}


module.exports = authController;