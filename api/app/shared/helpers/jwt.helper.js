const { readFileSync } = require('fs');
const { sign, verify } = require('jsonwebtoken');
const config = require('../app/config');

const privateKey = readFileSync('keys/private.key', 'utf-8');
const publicKey = readFileSync('keys/public.key', 'utf-8');

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
