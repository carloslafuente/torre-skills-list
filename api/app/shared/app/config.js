require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URL,
  SECRET_TOKEN: process.env.SECRET,
  signOptions: {
    issuer: process.env.ISSUER,
    subject: process.env.SUBJECT,
    audience: process.env.AUDIENCE,
    expiresIn: process.env.EXPIRES_IN,
    algorithm: process.env.ALGORITH,
  },
  PRIVATE_KEY: process.env.PRIVATE_KEY,
  PUBLIC_KEY: process.env.PUBLIC_KEY
};
