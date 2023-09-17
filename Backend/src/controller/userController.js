const User = require('../model/user');
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, 'uploads'),
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
      cb(true);
    } else {
      cb(false, 'O arquivo deve ser uma imagem PNG ou JPEG.');
    }
  },
});

const cadastrarUsuario = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const photo = await upload.single('photo');
    const newUser = await User.create({ username, email, password, photo: photo.filename });

    res.status(201).json({ message: 'Cadastro bem-sucedido!' });
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
