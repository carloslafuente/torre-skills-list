const bcrypt = require('bcrypt');

const saltOrRounds = 10;

const encrypt = async (password) => {
  return await bcrypt.hash(password, saltOrRounds);
};

const isMatch = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = {
  encrypt,
  isMatch,
};
