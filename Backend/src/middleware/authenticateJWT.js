const jwt = require('jsonwebtoken');
const SECRET_KEY = 'Chapeco2022@';

const authenticateJWT = (req, res, next) => {
  const tokenHeader = req.headers['authorization']
  const token = tokenHeader && tokenHeader.split(" ")[1];

  if(!token){
    return res.status(401).json({message: "Nao autorizado !"})
  }

  try{
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user
      next();
  }catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao verificar credenciais' });
  }
}

module.exports = authenticateJWT;
