
const Botao = ({ texto, RetornoPai }) => {


function EnviarParaoPai(texto) {
    RetornoPai(texto)
}
    return (
        <div>
            <input type="button"
                value = { texto }
                onClick = { () => EnviarParaoPai( texto ) }
            />
        </div>
    )
}
export default Botao;