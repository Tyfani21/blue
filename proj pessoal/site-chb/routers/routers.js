const express = require('express');

const app = express();

app.get("/", (req, res) =>{
    res.send("Pagina principal")
})

app.get("/quest", (req, res) =>{
    res.send("Pagina do quiz")
})