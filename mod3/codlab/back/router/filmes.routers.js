const express = require("express");
const router = express.Router();

const listaFilmes = [
    {
      id: 1,
      nome: "Barbie butterfly",
      genero: "infantil",
      voto: "5 estrelas",
      comentarios:"muito bom"

    },
  ]


router.get("/filmes", (req,res)=>{
    res.send(listaFilmes)
})

module.exports = router;