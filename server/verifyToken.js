const jwt = require('jsonwebtoken');
require('dotenv').config()

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  // console.log(token)
  if (!token) {
    return res.status(401).send('Unauthorized: No token provided');
  }
  const secret = process.env.SECRET_KEY;
  jwt.verify(token, secret, (err, decoded) => {
    // console.log("hello",decoded);
    if (err) {
      return res.status(401).send('Unauthorized: Invalid token');
    }
    req.role = decoded.role;
    next();
  });
}

module.exports = authenticate