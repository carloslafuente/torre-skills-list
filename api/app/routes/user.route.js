const { apiGET, apiPOST } = require('../controllers/user.controller');

const userRouter = (router) => {
  router.get('/users', apiGET);
  router.post('/users', apiPOST);
};

module.exports = userRouter;
