const {
  getUsers,
  postUser,
  getUsersBySkill,
} = require('../controllers/user.controller');

const userRouter = (router) => {
  router.get('/users', getUsers);
  router.post('/users', postUser);
  router.get('/users/skill/:skillId', getUsersBySkill);
};

module.exports = userRouter;
