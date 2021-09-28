const express = require('express');

const app = express();

app.get("/", (req, res) =>{
    res.send("Pagina principal")
})

app.get("/quiz", (req, res) =>{
    res.send("Pagina do quiz")
})