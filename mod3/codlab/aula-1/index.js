const express = require('express');
const app = express();

const port = 3000

app.get('/', (req, res) => { 
res.send('Hello, blue');})


const filmes = ["Harry Potter", "Percy Jackson", "vingadores"]

app.get('/filmes', (req, res) =>{
    res.send(filmes)
})

//Se colocar o dois pontos, js já vai saber q é uma req
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id-1 //=> params é o parametro q vai receber do usuario
    const filme = filmes[id];
    res.send(filme)
})
app.listen(port,() => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})
