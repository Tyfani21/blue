const express = require("express");
const router = express.Router();

const filmes = [
    {
      id: Date.now(),
      nome: "Barbie butterfly",
      imagem:"isso",
      genero: "infantil",
      voto: "5",
    },
  ]


router.get('/', (req,res)=>{
    res.send(filmes)
})
router.get('/:id', (req,res) =>{
  const idParam = req.params.id;
  const index = filmes.findIndex(filme => filme.id == idParam)
  const filme = filmes[index];
  res.send(filme)
})

router.put('/:id', (req, res) => {
  const idParam = req.params.id;
  const filmeAtualizado = req.body;
  const index = filmes.findIndex(vaga => vaga.id == idParam);

  filmes[index] = {
    id: filmes[index].id,
    ...filmeAtualizado
  }
  res.send(filmes[index]);
})

router.post('/add',(req, res) =>{
    const filme = req.body;
    filme.id = Date.now();
    filmes.push(filme);
    res.status(201).send({
      message: "salvo com sucesso",
      data: filme
    });
})

module.exports = router;