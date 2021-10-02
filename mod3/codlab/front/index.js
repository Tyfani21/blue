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
        <div>
        <img id="img" src="${filme.imagem}"/>
          <div class="card-header"><span class="card-title">Nome:
          </span>${filme.nome}
          </div> 
          <div class="card-body">
            <p class="card-text"><span class="card-title">Genero</span>: ${filme.genero}</p>
            
            <p class="card-text"><span class="card-title">Voto:</span> ${filme.voto} estrelas</p>
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
    let voto = document.getElementsByName("fb");
    for (var i = 0; i < voto.length; i++) {
          if (voto[i].checked) {
              voto = voto[i].value;
          }
      }
    
      const filme = {
      nome,
      imagem,
      genero,
      voto,
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
    voto = '';
    lista.innerHTML = '';

    if(result){
      getFilmes()
    }

  }

  const putFilmes = () =>{
  }