const UserSchema = require('../schemas/user.schema');
const { encrypt, isMatch } = require('../shared/helpers/bcryptPassword.helper');
const mongoose = require('mongoose');

const getUsers = async () => {
  const userRepository = mongoose.model('User', UserSchema);
  const users = await userRepository.find({}).select('-password');
  return users;
};

const postUser = async (user) => {
  const userRepository = mongoose.model('User', UserSchema);
  const createdUser = await new userRepository({
    username: user.username,
    password: await encrypt(user.password),
  }).save();
  createdUser.password = undefined;
  return createdUser;
};

const login = async (userCredentials) => {
  const userRepository = mongoose.model('User', UserSchema);
  const user = await userRepository
    .findOne({
      username: userCredentials.username,
    })
    .exec();
  if (
    user === undefined ||
    !!!user ||
    !(await isMatch(userCredentials.password, user.password))
  )
    return null;

  user.password = undefined;
  return user;
};

module.exports = {
  getUsers,
  postUser,
  login,
};
