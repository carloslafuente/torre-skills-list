import mongoose from 'mongoose';
const { Schema } = mongoose;

const skillSchema = new Schema({
  name: { type: String, unique: true, required: true },
  description: { type: String, required: true },
});

module.exports = skillSchema;
