const User = require('../schemas/user.schema');
const { encrypt, isMatch } = require('../shared/helpers/bcryptPassword.helper');

const getUsers = async () => {
  const userRepository = User;
  const users = await userRepository
    .find({})
    .populate('skills')
    .select('-password')
    .exec();
  return users;
};

const getUsersBySkill = async (skillId) => {
  const userRepository = User;
  const users = await userRepository
    .find({
      skills: skillId,
    })
    .populate('skills')
    .select('-password')
    .exec();
  return users;
};

const postUser = async (user) => {
  const userRepository = User;
  const createdUser = await new userRepository({
    username: user.username,
    password: await encrypt(user.password),
    skills: user.skills,
  }).save();
  createdUser.password = undefined;
  return createdUser;
};

const login = async (userCredentials) => {
  const userRepository = User;
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
  getUsersBySkill
};
