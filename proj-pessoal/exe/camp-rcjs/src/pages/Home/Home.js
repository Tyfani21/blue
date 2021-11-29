import './Home.css'
import { useState, useEffect } from 'react';
const Home = () => {
    const [Off, setOff] = useState(true);
    useEffect(() => {
        setOff(false);
        }, [Off])

    return (   <div id="expl">
            <div>
            <button id="fechar" onClick={Off}>x</button>
            <h2>Explicação</h2>
            <p>Esse site foi idealizado com o objetivo de interagir com os fãs do Riordanverse e trazer a vida um dos lugares favoritos da programadora: o Acampamento Meio-sangue</p>
        </div>
        </div>)
}
export default Home