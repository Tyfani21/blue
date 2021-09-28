//Importando express
const express = require('express');
//Inicializando o express
const app = express();

//API -Endpoints 
//REST = GET/POST/PUT/DELETE

//Rota raiz
app.get ('/', (req, res) =>{
    //req => request está relacionado a requisição qye vem do cliente
    //res => response está relacionado a resposta que vem do servidor para cliente
    res.send('Hello World')
});

//rota retorna inforções da blue
app.get('/blue', (req, res) => {
    res.send('Hello, bluemers')
});

const port = 3000

app.listen(port);
console.log('aplicação rodando na porta 3000')