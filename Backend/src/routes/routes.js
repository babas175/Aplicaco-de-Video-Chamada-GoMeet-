const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const contatoController = require('../controller/contatoController');
const authenticateJWT = require('../middleware/authenticateJWT');
const authController = require('../middleware/authenticateJWT');
const login  = require('../controller/login');


router.post('/login', login.login);

router.post('/cadastro', userController.cadastrarUsuario);

router.get('/listarUsuarios',authenticateJWT, userController.obterUsuarios);

router.get('/usuarios/:id', authenticateJWT, userController.obterUsuarioPorId);

router.post('/contatos', authenticateJWT, contatoController.criarContato);

router.get('/contatos', authenticateJWT, contatoController.listarContatos);

router.get('/contatos/:nome', authenticateJWT, contatoController.buscarContatoPorNome);

router.put('/contatos/:nome', authenticateJWT, contatoController.atualizarContatoPorNome);

router.delete('/contatos/:nome', authenticateJWT, contatoController.excluirContatoPorNome);





module.exports = router;
