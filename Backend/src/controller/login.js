const jwt = require('jsonwebtoken');

const User = require('../model/user');
const SECRET_KEY = 'Chapeco2022@';

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // O modelo `User` está definido aqui, então o método `findOne()` pode ser chamado
    const user = await User.findOne({ where: { email, password } });

    if (user) {
      // Autenticação bem-sucedida, gerar um token JWT
      const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: 3600 });

      // Retornar o token JWT no formato JSON
      res.status(200).json({ auth: true, token });
    } else {
      res.status(401).json({ erro: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao verificar credenciais' });
  }
};

module.exports = { login };