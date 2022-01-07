const {
  getAllUsers,
  createUser,
  getAllUsersBySkill,
} = require('../services/user.service');

async function getUsers(req, res) {
  try {
    const users = await getAllUsers();
    return res.status(200).send({ data: users });
  } catch (error) {
    return res.status(500).send({ message: 'Internal Error Server' });
  }
}

async function getUsersBySkill(req, res) {
  try {
    const skillId = req.params.skillId;
    const users = await getAllUsersBySkill(skillId);
    return res.status(200).send({ data: users });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: 'Internal Error Server' });
  }
}

async function postUser(req, res) {
  try {
    const newUser = req.body;
    const user = await createUser(newUser);
    return res.status(201).send({ data: user });
  } catch (error) {
    return res.status(500).send({ message: 'Internal Error Server' });
  }
}

module.exports = {
  getUsers,
  postUser,
  getUsersBySkill,
};
