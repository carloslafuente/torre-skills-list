const { loginUser } = require('../services/auth.service');

async function apiPOST(req, res) {
  try {
    const userCredentials = req.body;
    const token = await loginUser(userCredentials);
    return res.status(201).send({ data: token });
  } catch (error) {
    return res.status(500).send({ message: 'Internal Error Server' });
  }
}

module.exports = {
  apiPOST,
};
