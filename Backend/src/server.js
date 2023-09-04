const express = require('express');
const morgan = require('morgan');
const sequelize = require('./database/database');
const User = require('./model/user'); 
const contato = require('./model/contato'); 
const routes = require('./routes/routes');
const authenticateJWT = require('./middleware/authenticateJWT'); // Importe o middleware

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(morgan('dev'));

sequelize.sync()
  .then(() => {
    console.log('Tabelas do banco de dados foram sincronizadas com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabelas do banco de dados:', error);
  });

app.use(authenticateJWT); 

app.use(routes);

app.listen(port, async () => {
  console.log(`API em execução na porta ${port}`);
});
