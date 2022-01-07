const Mongoose = require('mongoose');

const { Schema } = Mongoose;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
});

const User = Mongoose.model('User', userSchema);

module.exports = User;
