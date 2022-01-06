const express = require('express');
const router = express.Router();

const userRouter = require('./user.route');
const skillRoute = require('./skill.route');

userRouter(router);
skillRoute(router);

module.exports = router;
