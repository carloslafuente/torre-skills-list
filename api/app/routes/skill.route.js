const { apiGET } = require('../controllers/skill.controller');
const { isLogged } = require('../middlewares/auth.middleware');

const skillRoute = (router) => {
  router.get('/skills', isLogged, apiGET);
};

module.exports = skillRoute;
