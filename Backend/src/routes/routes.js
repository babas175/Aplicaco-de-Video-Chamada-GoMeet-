const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const contatoController = require('../controller/contatoController');
const authenticateJWT = require('../middleware/authenticateJWT');
const login  = require('../controller/login');



router.post('/login', login.login);

router.post('/cadastro', userController.cadastrarUsuario);

router.get('/listarUsuarios',authenticateJWT, userController.obterUsuarios);

router.get('/usuarios/:id', authenticateJWT, userController.obterUsuarioPorId);

router.post('/CadastrarContatos', authenticateJWT, contatoController.criarContato);

router.get('/contatos', authenticateJWT, contatoController.listarContatos);

router.get('/Buscarcontatos/:nome', authenticateJWT, contatoController.buscarContatoPorNome);

router.put('/AtualizarContatos/:email', authenticateJWT, contatoController.atualizarContatoPorNome);

router.delete('/DeletarContatos/:email', authenticateJWT, contatoController.excluirContatoPorNome);





module.exports = router;

