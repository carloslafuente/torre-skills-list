const { getAllUsers, createUser } = require('../services/user.service');

async function apiGET(req, res) {
  try {
    const users = await getAllUsers();
    return res.status(200).send({ data: users });
  } catch (error) {
    return res.status(500).send({ message: 'Internal Error Server' });
  }
}

async function apiPOST(req, res) {
  try {
    const newUser = req.body;
    const user = await createUser(newUser);
    return res.status(201).send({ data: user });
  } catch (error) {
    return res.status(500).send({ message: 'Internal Error Server' });
  }
}

module.exports = {
  apiGET,
  apiPOST,
};
