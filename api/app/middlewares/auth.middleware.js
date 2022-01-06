const { verifyJwt } = require('../shared/helpers/jwt.helper');

function isLogged(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (token === undefined)
      return res.status(401).send({ message: 'notAuthorized' });

    const { cu } = verifyJwt(token);
    res.locals.userCode = cu;
    next();
  } catch (error) {
    console.warn('AUTHENTICATION MIDDLEWARE', error.name);
    console.warn('AUTHENTICATION MIDDLEWARE', error.message);
    if (error.name === 'JsonWebTokenError') {
      if (error.message === 'invalid signature')
        return res.status(401).send({ message: 'invalidToken' });
      if (error.message === 'invalid token')
        return res.status(401).send({ message: 'invalidToken' });
      if (error.message === 'invalid algorithm')
        return res.status(500).send({ message: 'invalidKey' });
    }
  }
}

module.exports = {
  isLogged,
};
