const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Importe o Sequelize configurado corretamente

const Contato = sequelize.define('Contato', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  celular: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  dono: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Users', // Nome da tabela de referência (User)
      key: 'username', // Campo da tabela de referência (username)
    },
  },
});

module.exports = Contato;
