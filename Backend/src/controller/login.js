const jwt = require('jsonwebtoken');
const { User } = require('../model/user'); 
const SECRET_KEY = 'sua_chave_secreta'; 

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username, password } });
    if (user) {
      const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ erro: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao verificar credenciais' });
  }
};

module.exports = { login };
