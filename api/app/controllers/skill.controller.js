function apiGET(req, res) {
  return res.status(200).send({ data: 'GET SKILLS' });
}

function apiPOST() {
  return res.status(201).send({ data: 'POST SKILL' });
}

module.exports = {
  apiGET,
  apiPOST,
};
