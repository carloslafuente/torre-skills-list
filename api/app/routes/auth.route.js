const { apiPOST } = require('../controllers/auth.controller');

const authRouter = (router) => {
  router.post('/auth/login', apiPOST);
};

module.exports = authRouter;
