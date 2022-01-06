const { getUsers, postUser } = require('../repositories/user.repository');

const getAllUsers = async () => {
  return await getUsers();
};

const createUser = async (user) => {
  return await postUser(user);
};

module.exports = {
  getAllUsers,
  createUser,
};
