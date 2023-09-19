import { useState } from 'react'

import Filhote from './Filho'
import Irmao from './Irmao'

const Home = () => {

    const [ conta, setContador ] = useState(0)

    const Contador = () => {
        setContador( conta+1 )
    }

    const RecebeFuncao = (valor) => {
        setContador(valor)
    }

    return (
        <div>
            <h1>Home</h1>
            <Irmao funcao={ RecebeFuncao } />
            <Filhote  numero={ conta } />
            <input type="button"
                value="Contar"
                onClick={ () => Contador() } />
        </div>
    )
}

export default Home