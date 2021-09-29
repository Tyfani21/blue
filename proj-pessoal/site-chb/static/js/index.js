
let antes = document.querySelector('#antes');
let depois = document.querySelector('#depois');


antes.addEventListener('mouseenter', () => {
    antes.style.display = 'none'
    depois.style.display = 'flex'
})

depois.addEventListener('mouseout', ()=>{
    depois.style.display = 'none'
    antes.style.display = 'flex'
})

const fechar = document.querySelector("#fechar")

fechar.addEventListener("click", ()=> {
    document.querySelector("#expl").style.display = "none"
})