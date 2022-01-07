const { sign, verify } = require('jsonwebtoken');
const config = require('../app/config');

const privateKey = config.PRIVATE_KEY;
const publicKey = config.PUBLIC_KEY;

const signOptions = config.signOptions;

function signJwt(user) {
  const payload = {
    cu: user._id,
  };
  return sign(payload, privateKey, signOptions);
}

function verifyJwt(token) {
  return verify(token, publicKey, signOptions);
}

module.exports = {
  signJwt,
  verifyJwt,
};
