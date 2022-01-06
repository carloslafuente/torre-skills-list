const Mongoose = require('mongoose');

const { Schema } = Mongoose;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

module.exports = UserSchema;
