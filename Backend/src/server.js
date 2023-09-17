const express = require('express');
const morgan = require('morgan');
const sequelize = require('./database/database');
const User = require('./model/user'); 
const contato = require('./model/contato'); 
const routes = require('./routes/routes');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3002', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions)); 

sequelize.sync({ force: true })
  .then(async () => {
    console.log('Tabelas do banco de dados foram sincronizadas com sucesso.');

    // Inserir um usuário padrão após a sincronização das tabelas para pode testar 
    const user = await User.create({
      username: 'usuariopadrao',
      email: 'lubin@gmail.com',
      password: 'Chapeco2022', 
      photo: 'link_para_foto_de_perfil_padrao',
    });

    const contatos = await contato.create({
      nome: 'Sebastien',
      celular: '(49) 98504-8890',
      email: 'lubin@gmail.com',
      dono: 'lubin@gmail.com',
    });

    const contatos1 = await contato.create({
      nome: 'Diogo',
      celular: '(49) 98504-8890',
      email: 'Diogo2023@gmail.com',
      dono: 'lubin@gmail.com',
    });
    console.log('Usuário padrão inserido !', user.toJSON());
    console.log('Contato inserido com sucesso !', contatos.toJSON());
    console.log('Contato inserido com sucesso !', contatos1.toJSON());
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabelas do banco de dados:', error);
  });


app.use(routes);

app.listen(port, async () => {
  console.log(`API em execução na porta ${port}`);
});
