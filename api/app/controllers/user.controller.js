const { getAllUsers, createUser } = require('../services/user.service');

async function apiGET(req, res) {
  const users = await getAllUsers();
  return res.status(200).send({ data: users });
}

async function apiPOST(req, res) {
  const newUser = req.body;
  const user = await createUser(newUser);
  return res.status(201).send({ data: user });
}

module.exports = {
  apiGET,
  apiPOST,
};
