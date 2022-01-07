const { apiGET, apiPOST } = require('../controllers/skill.controller');
const { isLogged } = require('../middlewares/auth.middleware');

const skillRoute = (router) => {
  router.get('/skills', apiGET);
  router.post('/skills', isLogged, apiPOST);
};

module.exports = skillRoute;
