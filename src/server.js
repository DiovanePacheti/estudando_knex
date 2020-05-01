const express = require('express');//importando o modulo

const app = express(); //atribuindo a função express

const routes = require('./routes'); //importando o arquivo routes 

app.use(express.json());//definindo json nas rotas

app.use(routes);//rotas usadas

//cath all middlewares
app.use((error,request,response,next) => {
	response.status(error.status || 500)
	response.json({error: error.message})
});

app.listen(3333, () => console.log('Server is running'));//ouvindo a porta 3333	