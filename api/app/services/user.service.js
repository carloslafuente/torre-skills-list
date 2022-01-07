const {
  getUsers,
  postUser,
  getUsersBySkill,
} = require('../repositories/user.repository');

const getAllUsers = async () => {
  return await getUsers();
};

const createUser = async (user) => {
  return await postUser(user);
};

const getAllUsersBySkill = async (user) => {
  return await getUsersBySkill(user);
};

module.exports = {
  getAllUsers,
  createUser,
  getAllUsersBySkill
};
