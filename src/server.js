const express = require('express');//importando o modulo

const app = express(); //atribuindo a função express

const routes = require('./routes'); //importando o arquivo routes 

app.use(express.json());//definindo json nas rotas

app.use(routes);//rotas usadas

app.listen(3333, () => console.log('Server is running'));//ouvindo a porta 3333	