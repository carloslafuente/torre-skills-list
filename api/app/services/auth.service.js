const { login } = require('../repositories/user.repository');
const { signJwt } = require('../shared/helpers/jwt.helper');

const loginUser = async (userCredentials) => {
  const user = await login(userCredentials);
  const token = signJwt(user);
  return {
    username: user.username,
    token,
  };
};

module.exports = {
  loginUser,
};
