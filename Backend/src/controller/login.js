const jwt = require('jsonwebtoken');

const User = require('../model/user');
const SECRET_KEY = 'Chapeco2022@';

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email, password } });

    if (user) {
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: 3600 });
      res.status(200).json({ auth: true, message: "login realizado com sucesso",token});
    } else {
      res.status(401).json({ erro: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao verificar credenciais' });
  }
};

module.exports = { login };