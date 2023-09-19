const Irmao = ({ funcao }) => {

    const PassarValor = (val) => {
        //funcao = val //Errado
        funcao(val)
    }

    return (
        <div>
            <label>Digite um número</label>
            <input type="text"
                onChange={ (e) => PassarValor(e.target.value) }
            />
        </div>
    )
}

export default Irmao