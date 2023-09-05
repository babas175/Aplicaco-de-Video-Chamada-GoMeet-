const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Importe o Sequelize configurado corretamente

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.BLOB,
    allowNull: true,
  },
});

module.exports = User;
