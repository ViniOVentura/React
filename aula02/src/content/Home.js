import { useState } from "react";
import Pai from "./Pai";
import Irmao from "./Irmao";

const Home = () => {
const [contar, setContar] = useState(0)

const RecebeFuncao = (valor) => {
    console.log(valor)
}
    return(
        <div>

        <h1>Home</h1>
        <Irmao funcao={RecebeFuncao}/>
        <br/>
        <br/>
        <Pai/>
        <input 
        type="button"
        value="Contar"
        onClick={(e) => {setContar(contar + 1)}}
        />
        <h3>{contar}</h3>
        </div>
    )
}

export default Home;