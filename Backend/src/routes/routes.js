const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const contatoController = require('../controller/contatoController');
const authenticateJWT = require('../middleware/authenticateJWT');
const authController = require('../middleware/authenticateJWT');
const login  = require('../controller/login');

router.get('/login', login.login);

router.post('/cadastro', userController.cadastrarUsuario);

router.get('/listarUsuarios', userController.obterUsuarios);

router.get('/usuarios/:id', userController.obterUsuarioPorId);

router.post('/contatos', contatoController.criarContato);

router.get('/contatos', authenticateJWT, contatoController.listarContatos);

router.get('/contatos/:nome', contatoController.buscarContatoPorNome);

router.put('/contatos/:nome', contatoController.atualizarContatoPorNome);

router.delete('/contatos/:nome', contatoController.excluirContatoPorNome);








module.exports = router;

