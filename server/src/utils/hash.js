const bcrypt = require('bcrypt');

const passwordHash = async (password) => {
  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS));
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    console.log("error from password hash", err);
  }
  return null;
};

export default passwordHash;
