const User = require('../model/contato');
const authenticateJWT = require('../middleware/authenticateJWT'); 

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
    const { username } = req.user;
    try {
      const contatos = await Contato.findAll({
        where: { dono: username }, 
      });
      res.status(200).json(contatos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao buscar contatos' });
    }
  };
  

  const buscarContatoPorNome = async (req, res) => {
    const { nome } = req.params;
    const { username } = req.user; 
    try {
      const contato = await Contato.findOne({
        where: {
          nome,
          dono: username, 
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
    const { nome } = req.params;
    try {
      const contato = await Contato.findOne({
        where: { nome },
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
    const { nome } = req.params;
    try {
      const contato = await Contato.findOne({
        where: { nome },
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
