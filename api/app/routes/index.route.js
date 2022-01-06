const express = require('express');
const router = express.Router();

const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const skillRoute = require('./skill.route');

userRouter(router);
skillRoute(router);
authRouter(router);

module.exports = router;
