const User = require('../model/contato');
const authenticateJWT = require('../middleware/authenticateJWT'); 
const Contato = require('../model/contato');

const criarContato = async (req, res) => {
    try {
      const { email } = req.user;
      req.body.dono = email;
      const contato = await Contato.create(req.body);
      res.status(201).json(contato);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao criar o contato' });
    }
  };
  

  const listarContatos = async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ erro: 'Usuário não autenticado' });
      }

      const { email } = req.user;
      if (!email) {
        return res.status(400).json({ erro: 'Email do usuário não encontrado' });
      }

      const contatos = await Contato.findAll({
        where: { dono: email }, 
      });

      res.status(200).json(contatos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao buscar contatos' });
    }
};

  

  const buscarContatoPorNome = async (req, res) => {
    const { nome } = req.params;
    const { email } = req.user; 
    try {
      const contato = await Contato.findOne({
        where: {
          nome,
          dono: email, 
        },
      });
  
      if (contato) {
        res.status(200).json(contato);
      } else {
        res.status(404).json({ erro: 'Contato não encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao buscar contato por nome' });
    }
  };
  

const atualizarContatoPorNome = async (req, res) => {
    const { email } = req.params;
    try {
      const contato = await Contato.findOne({
        where: { email },
      });
  
      if (!contato) {
        return res.status(404).json({ erro: 'Contato não encontrado' });
      }
  
      await contato.update(req.body);
      res.status(200).json({ mensagem: 'Contato atualizado com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao atualizar contato' });
    }
  };
  
  const excluirContatoPorNome = async (req, res) => {
    const { email } = req.params;
    try {
      const contato = await Contato.findOne({
        where: { email },
      });
  
      if (!contato) {
        return res.status(404).json({ erro: 'Contato não encontrado' });
      }
  
      await contato.destroy();
      res.status(200).json({ mensagem: 'Contato excluído com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao excluir contato' });
    }
  };
  

module.exports = {
  criarContato,
  listarContatos,
  buscarContatoPorNome,
  atualizarContatoPorNome,
  excluirContatoPorNome,
};
