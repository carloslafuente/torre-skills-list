const { apiGET } = require('../controllers/skill.controller');

const skillRoute = (router) => {
  router.get('/skills', apiGET);
};

module.exports = skillRoute;
