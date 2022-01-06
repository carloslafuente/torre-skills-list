require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URL,
  SECRET_TOKEN: process.env.SECRET,
};
