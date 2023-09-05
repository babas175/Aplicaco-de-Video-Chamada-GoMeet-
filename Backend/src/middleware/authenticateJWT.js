const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ erro: 'Acesso não autorizado' });
  }

  if (!jwt.isValid(token, 'Chapeco2022@')) {
    return res.status(403).json({ erro: 'Token inválido' });
  }

  const user = jwt.verify(token, 'Chapeco2022@'); 
  req.user = user;
  next();
}

module.exports = authenticateJWT;