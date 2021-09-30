const urlApi = "http://localhost:3000/filmes"
const lista = document.getElementById("lista")

let filmes = document.getElementById("")







const getFilmes = async () => {
    const response = await fetch(urlApi);
    const data = await response.json();
    console.log(data);
    data.map((filme) => {
      lista.insertAdjacentHTML('beforeend', `
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            ${filme.nome}
          </div> 
          <div class="card-body">
            <p class="card-text">Genero: ${filme.genero}</p>
            <p class="card-text">Voto: ${filme.voto} estrelas</p>
            <p class="card-text">Comentario: ${filme.comentarios}</p>
          </div>
        </div>
      </div>
      `)
    })
  }
  getFilmes();