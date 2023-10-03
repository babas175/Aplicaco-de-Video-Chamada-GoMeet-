const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Importe o Sequelize configurado corretamente

const Contato = sequelize.define('contato', {
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
  },
  dono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Contato;
