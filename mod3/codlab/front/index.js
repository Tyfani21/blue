const urlApi = "http://localhost:3000"
const lista = document.getElementById("lista")


const getFilmes = async () => {
    const response = await fetch(urlApi);
    const data = await response.json();
    console.log(data);
    data.map((filme) => {
      lista.insertAdjacentHTML('beforeend', `
      <div class="col-6">
        <div class="card">
        ${filme.imagem}
          <div class="card-header">
            ${filme.nome}
          </div> 
          <div class="card-body">
            <p class="card-text">Genero: ${filme.genero}</p>
            <p class="card-text">Voto: ${filme.voto} estrelas</p>
          </div>
        </div>
      </div>
      `)
    })
  }
  getFilmes();

  const postFilmes = async (evento) =>{
    evento.preventDefault();
    let nome = document.getElementById('nome').value;
    let imagem = document.getElementById('imagem').value; 
    let genero = document.getElementById('genero').value;
    
    const filme = {
      nome,
      imagem,
      genero
    }
   
    
    const request = new Request(`${urlApi}/add`, {
      method: 'POST',
      body: JSON.stringify(filme),
      headers: new Headers({'Content-type':'application/json'})
    })
    const response = await fetch(request);
    const result = await response.json();
    nome = '';
    imagem = '';
    genero = '';
    lista.innerHTML = '';

    if(result){
      getFilmes()
    }

  }

  const putFilmes = () =>{

  }