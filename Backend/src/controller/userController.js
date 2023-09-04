const User = require('../model/user');




const cadastrarUsuario = async (req, res) => {
  try {
    const { username, email, password, photo } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Este email já está em uso.' });
    }
    const newUser = await User.create({ username, email, password, photo });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro no cadastro:', error);
    res.status(500).json({ message: 'Erro no servidor.' });
  }
};


const obterUsuarios = async (req, res) => {
    try {
      const usuarios = await User.findAll(); 
      res.status(200).json(usuarios);
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  };

const obterUsuarioPorId = async (req, res) => {
  try {
    const { username } = req.params; 
    const usuario = await User.findOne(username); 
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error('Erro ao obter usuário por ID:', error);
    res.status(500).json({ message: 'Erro no servidor.' });
  }
};

module.exports = {
  cadastrarUsuario,
  obterUsuarios,
  obterUsuarioPorId
};
