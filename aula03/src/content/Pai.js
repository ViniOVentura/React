import { useState } from 'react'
import Botao from './Botao.js'
import './style.css'

const Pai = () => {
    const [calc, setCalc] = useState('')

    const Receba = (valor) => {
        if(valor == '='){
            setCalc(eval(calc))
        }
        else if(valor == 'CE'){
            setCalc('')
        }
        else
            setCalc(calc + valor)
    }

    return (
        <div className='Caixa'>
            <input type='text'  className='Tela' value={calc}/> 
            <div className='Linha'>
            <Botao className='Botao' texto="7" RetornoPai={Receba} />
            <Botao className='Botao' texto="8" RetornoPai={Receba} />
            <Botao className='Botao' texto="9" RetornoPai={Receba} />
            <Botao className='Botao' texto="-" RetornoPai={Receba} />
            </div>
            <div className='Linha'>

            <Botao className='Botao' texto="4" RetornoPai={Receba} />
            <Botao className='Botao' texto="5" RetornoPai={Receba} />
            <Botao className='Botao' texto="6" RetornoPai={Receba} />
            <Botao className='Botao' texto="+" RetornoPai={Receba} />
            </div>
            <div className='Linha'>
            <Botao className='Botao' texto="1" RetornoPai={Receba} />
            <Botao className='Botao' texto="2" RetornoPai={Receba} />
            <Botao className='Botao' texto="3" RetornoPai={Receba} />
            <Botao className='Botao' texto="*" RetornoPai={Receba} />
            </div>
            <div className='Linha'>

            <Botao className='Botao' texto="0" RetornoPai={Receba} />
            <Botao className='Botao' texto="CE" RetornoPai={Receba} />
            <Botao className='Botao' texto="=" RetornoPai={Receba} />
            <Botao className='Botao' texto="/" RetornoPai={Receba} />
            </div>
        </div>
    )
}
export default Pai;