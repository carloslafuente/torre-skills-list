const Mongoose = require('mongoose');

const { Schema } = Mongoose;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }]
});

module.exports = UserSchema;
