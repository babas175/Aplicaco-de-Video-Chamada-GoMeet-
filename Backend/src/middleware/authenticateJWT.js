// authenticateJWT.js
const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ erro: 'Acesso não autorizado' });
  }

  try {
    const user = jwt.verify(token, 'your-secret-key'); // Substitua pela sua chave secreta

    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ erro: 'Token inválido' });
  }
}

module.exports = authenticateJWT;
