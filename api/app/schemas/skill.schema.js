const Mongoose = require('mongoose');

const { Schema } = Mongoose;

const skillSchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
});

const Skill = Mongoose.model('Skill', skillSchema);

module.exports = Skill;
