const {
  getUsers,
  postUser,
  getUsersBySkill,
} = require('../controllers/user.controller');
const { isLogged } = require('../middlewares/auth.middleware');

const userRouter = (router) => {
  router.get('/users', isLogged, getUsers);
  router.post('/users', postUser);
  router.get('/users/skill/:skillId', isLogged, getUsersBySkill);
};

module.exports = userRouter;
