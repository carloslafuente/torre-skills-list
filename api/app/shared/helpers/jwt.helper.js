const readFileSync = require('fs');
const { sign, verify } = require('jsonwebtoken');

const privateKey = readFileSync('keys/private.key', 'utf-8');
const publicKey = readFileSync('keys/public.key', 'utf-8');

const signOptions = {
  issuer: 'Planning Poker Room',
  subject: 'carlos.lafuente.dev@gmail.com',
  audience: 'Planning Poker Room API',
  expiresIn: '3d',
  algorithm: 'RS256',
};

export function signJwt(user) {
  const payload = {
    cu: user._id,
  };
  return sign(payload, privateKey, signOptions);
}

export function verifyJwt(token) {
  return verify(token, publicKey, signOptions);
}
