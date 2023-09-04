const User = require('../model/contato');


const criarContato = async (req, res) => {
  try {
    const contato = await Contato.create(req.body);
    res.status(201).json(contato);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao criar o contato' });
  }
};

const listarContatos = async (req, res) => {
  try {
    const contatos = await Contato.findAll();
    res.status(200).json(contatos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar contatos' });
  }
};

const buscarContatoPorNome = async (req, res) => {
  const { nome } = req.params;
  try {
    const contato = await Contato.findOne({
      where: { nome },
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
    const [linhasAfetadas] = await Contato.update(req.body, {
      where: { nome },
    });
    if (linhasAfetadas > 0) {
      res.status(200).json({ mensagem: 'Contato atualizado com sucesso' });
    } else {
      res.status(404).json({ erro: 'Contato não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao atualizar contato' });
  }
};

const excluirContatoPorNome = async (req, res) => {
  const { nome } = req.params;
  try {
    const linhasExcluidas = await Contato.destroy({
      where: { nome },
    });
    if (linhasExcluidas > 0) {
      res.status(200).json({ mensagem: 'Contato excluído com sucesso' });
    } else {
      res.status(404).json({ erro: 'Contato não encontrado' });
    }
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
