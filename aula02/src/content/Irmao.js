const Irmao = ({funcao}) => {
    const PassarValor = (val) => {
        funcao(val)
    }
    return(
        <div>
            <label>Digite um numero:</label>
            <input type='text' onChange={(e) => PassarValor(e.target.value)}/>
        </div>
    )
}
export default Irmao;